var searchIndex = {};
searchIndex["flate2"] = {"doc":"A DEFLATE-based stream compression/decompression library","items":[[3,"GzBuilder","flate2","A builder structure to create a new gzip Encoder.",null,null],[3,"GzHeader","","A structure representing the header of a gzip stream.",null,null],[3,"Compress","","Raw in-memory compression stream for blocks of data.",null,null],[3,"Decompress","","Raw in-memory decompression stream for blocks of data.",null,null],[3,"DataError","","Error returned when a decompression object finds that the input stream of bytes was not a valid input stream of bytes.",null,null],[4,"Status","","Possible status results of compressing some data or successfully decompressing a block of data.",null,null],[13,"Ok","","Indicates success.",0,null],[13,"BufError","","Indicates that forward progress is not possible due to input or output buffers being empty.",0,null],[13,"StreamEnd","","Indicates that all input has been consumed and all output bytes have been written. Decompression/compression should not be called again.",0,null],[4,"Flush","","Values which indicate the form of flushing to be used when compressing or decompressing in-memory data.",null,null],[13,"None","","A typical parameter for passing to compression/decompression functions, this indicates that the underlying stream to decide how much data to accumulate before producing output in order to maximize compression.",1,null],[13,"Sync","","All pending output is flushed to the output buffer and the output is aligned on a byte boundary so that the decompressor can get all input data available so far.",1,null],[13,"Partial","","All pending output is flushed to the output buffer, but the output is not aligned to a byte boundary.",1,null],[13,"Block","","A deflate block is completed and emitted, as for `Flush::Sync`, but the output is not aligned on a byte boundary and up to seven vits of the current block are held to be written as the next byte after the next deflate block is completed.",1,null],[13,"Full","","All output is flushed as with `Flush::Sync` and the compression state is reset so decompression can restart from this point if previous compressed data has been damaged or if random access is desired.",1,null],[13,"Finish","","Pending input is processed and pending output is flushed.",1,null],[4,"Compression","","When compressing data, the compression level can be specified by a value in this enum.",null,null],[13,"None","","No compression is to be performed, this may actually inflate data slightly when encoding.",2,null],[13,"Fast","","Optimize for the best speed of encoding.",2,null],[13,"Best","","Optimize for the size of data being encoded.",2,null],[13,"Default","","Choose the default compression, a balance between speed and size.",2,null],[11,"new","","Create a new blank builder with no header by default.",3,{"inputs":[],"output":{"name":"builder"}}],[11,"mtime","","Configure the `mtime` field in the gzip header.",3,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"builder"}}],[11,"extra","","Configure the `extra` field in the gzip header.",3,{"inputs":[{"name":"self"},{"name":"vec"}],"output":{"name":"builder"}}],[11,"filename","","Configure the `filename` field in the gzip header.",3,null],[11,"comment","","Configure the `comment` field in the gzip header.",3,null],[11,"write","","Consume this builder, creating a writer encoder in the process.",3,{"inputs":[{"name":"self"},{"name":"w"},{"name":"compression"}],"output":{"name":"encoderwriter"}}],[11,"read","","Consume this builder, creating a reader encoder in the process.",3,{"inputs":[{"name":"self"},{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreader"}}],[11,"buf_read","","Consume this builder, creating a reader encoder in the process.",3,{"inputs":[{"name":"self"},{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreaderbuf"}}],[11,"filename","","Returns the `filename` field of this gzip stream's header, if present.",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"extra","","Returns the `extra` field of this gzip stream's header, if present.",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"comment","","Returns the `comment` field of this gzip stream's header, if present.",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"mtime","","Returns the `mtime` field of this gzip stream's header, if present.",4,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new object ready for compressing data that it's given.",6,{"inputs":[{"name":"compression"},{"name":"bool"}],"output":{"name":"compress"}}],[11,"total_in","","Returns the total number of input bytes which have been processed by this compression object.",6,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"total_out","","Returns the total number of output bytes which have been produced by this compression object.",6,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"reset","","Quickly resets this compressor without having to reallocate anything.",6,{"inputs":[{"name":"self"}],"output":null}],[11,"compress","","Compresses the input data into the output, consuming only as much input as needed and writing as much output as possible.",6,null],[11,"compress_vec","","Compresses the input data into the extra space of the output, consuming only as much input as needed and writing as much output as possible.",6,null],[11,"new","","Creates a new object ready for decompressing data that it's given.",7,{"inputs":[{"name":"bool"}],"output":{"name":"decompress"}}],[11,"total_in","","Returns the total number of input bytes which have been processed by this decompression object.",7,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"total_out","","Returns the total number of output bytes which have been produced by this decompression object.",7,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"decompress","","Decompresses the input data into the output, consuming only as much input as needed and writing as much output as possible.",7,null],[11,"decompress_vec","","Decompresses the input data into the extra space in the output vector specified by `output`.",7,null],[11,"reset","","Performs the equivalent of replacing this decompression state with a freshly allocated copy.",7,{"inputs":[{"name":"self"},{"name":"bool"}],"output":null}],[11,"description","","",5,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"read","","Types which operate over `Read` streams, both encoders and decoders for various formats.",null,null],[3,"DeflateEncoder","flate2::read","A DEFLATE encoder, or compressor.",null,null],[3,"DeflateDecoder","","A DEFLATE decoder, or decompressor.",null,null],[3,"ZlibEncoder","","A ZLIB encoder, or compressor.",null,null],[3,"ZlibDecoder","","A ZLIB decoder, or decompressor.",null,null],[3,"GzEncoder","","A gzip streaming encoder",null,null],[3,"GzDecoder","","A gzip streaming decoder",null,null],[3,"MultiGzDecoder","","A gzip streaming decoder that decodes all members of a multistream",null,null],[0,"write","flate2","Types which operate over `Write` streams, both encoders and decoders for various formats.",null,null],[3,"DeflateEncoder","flate2::write","A DEFLATE encoder, or compressor.",null,null],[3,"DeflateDecoder","","A DEFLATE decoder, or decompressor.",null,null],[3,"ZlibEncoder","","A ZLIB encoder, or compressor.",null,null],[3,"ZlibDecoder","","A ZLIB decoder, or decompressor.",null,null],[3,"GzEncoder","","A gzip streaming encoder",null,null],[0,"bufread","flate2","Types which operate over `BufRead` streams, both encoders and decoders for various formats.",null,null],[3,"DeflateEncoder","flate2::bufread","A DEFLATE encoder, or compressor.",null,null],[3,"DeflateDecoder","","A DEFLATE decoder, or decompressor.",null,null],[3,"ZlibEncoder","","A ZLIB encoder, or compressor.",null,null],[3,"ZlibDecoder","","A ZLIB decoder, or decompressor.",null,null],[3,"GzEncoder","","A gzip streaming encoder",null,null],[3,"GzDecoder","","A gzip streaming decoder",null,null],[3,"MultiGzDecoder","","A gzip streaming decoder that decodes all members of a multistream",null,null],[8,"FlateReadExt","flate2","A helper trait to create encoder/decoders with method syntax.",null,null],[11,"gz_encode","","Consume this reader to create a compression stream at the specified compression level.",8,{"inputs":[{"name":"self"},{"name":"compression"}],"output":{"name":"gzencoder"}}],[11,"gz_decode","","Consume this reader to create a decompression stream of this stream.",8,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"zlib_encode","","Consume this reader to create a compression stream at the specified compression level.",8,{"inputs":[{"name":"self"},{"name":"compression"}],"output":{"name":"zlibencoder"}}],[11,"zlib_decode","","Consume this reader to create a decompression stream of this stream.",8,{"inputs":[{"name":"self"}],"output":{"name":"zlibdecoder"}}],[11,"deflate_encode","","Consume this reader to create a compression stream at the specified compression level.",8,{"inputs":[{"name":"self"},{"name":"compression"}],"output":{"name":"deflateencoder"}}],[11,"deflate_decode","","Consume this reader to create a decompression stream of this stream.",8,{"inputs":[{"name":"self"}],"output":{"name":"deflatedecoder"}}],[8,"FlateWriteExt","","A helper trait to create encoder/decoders with method syntax.",null,null],[11,"gz_encode","","Consume this writer to create a compression stream at the specified compression level.",9,{"inputs":[{"name":"self"},{"name":"compression"}],"output":{"name":"gzencoder"}}],[11,"zlib_encode","","Consume this writer to create a compression stream at the specified compression level.",9,{"inputs":[{"name":"self"},{"name":"compression"}],"output":{"name":"zlibencoder"}}],[11,"zlib_decode","","Consume this writer to create a decompression stream of this stream.",9,{"inputs":[{"name":"self"}],"output":{"name":"zlibdecoder"}}],[11,"deflate_encode","","Consume this writer to create a compression stream at the specified compression level.",9,{"inputs":[{"name":"self"},{"name":"compression"}],"output":{"name":"deflateencoder"}}],[11,"deflate_decode","","Consume this writer to create a decompression stream of this stream.",9,{"inputs":[{"name":"self"}],"output":{"name":"deflatedecoder"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"compression"}}],[11,"new","flate2::write","Creates a new encoder which will write compressed data to the stream given at the given compression level.",10,{"inputs":[{"name":"w"},{"name":"compression"}],"output":{"name":"encoderwriter"}}],[11,"reset","","Resets the state of this encoder entirely, swapping out the output stream for another.",10,{"inputs":[{"name":"self"},{"name":"w"}],"output":{"name":"result"}}],[11,"finish","","Consumes this encoder, flushing the output stream.",10,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"write","","",10,null],[11,"flush","","",10,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"new","flate2::read","Creates a new encoder which will read uncompressed data from the given stream and emit the compressed stream.",11,{"inputs":[{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreader"}}],[11,"reset","","Resets the state of this encoder entirely, swapping out the input stream for another.",11,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"r"}}],[11,"get_ref","","Acquires a reference to the underlying reader",11,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"get_mut","","Acquires a mutable reference to the underlying stream",11,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Consumes this encoder, returning the underlying reader.",11,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"read","","",11,null],[11,"new","flate2::bufread","Creates a new encoder which will read uncompressed data from the given stream and emit the compressed stream.",12,{"inputs":[{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreaderbuf"}}],[11,"reset","","Resets the state of this encoder entirely, swapping out the input stream for another.",12,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"r"}}],[11,"get_ref","","Acquires a reference to the underlying reader",12,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"get_mut","","Acquires a mutable reference to the underlying stream",12,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Consumes this encoder, returning the underlying reader.",12,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"read","","",12,null],[11,"new","flate2::read","Creates a new decoder which will decompress data read from the given stream.",13,{"inputs":[{"name":"r"}],"output":{"name":"decoderreader"}}],[11,"new_with_buf","","Same as `new`, but the intermediate buffer for data is specified.",13,{"inputs":[{"name":"r"},{"name":"vec"}],"output":{"name":"decoderreader"}}],[11,"reset","","Resets the state of this decoder entirely, swapping out the input stream for another.",13,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"r"}}],[11,"get_ref","","Acquires a reference to the underlying stream",13,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"get_mut","","Acquires a mutable reference to the underlying stream",13,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Consumes this decoder, returning the underlying reader.",13,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"total_in","","Returns the number of bytes that the decompressor has consumed.",13,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"total_out","","Returns the number of bytes that the decompressor has produced.",13,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"read","","",13,null],[11,"new","flate2::bufread","Creates a new decoder which will decompress data read from the given stream.",14,{"inputs":[{"name":"r"}],"output":{"name":"decoderreaderbuf"}}],[11,"reset","","Resets the state of this decoder entirely, swapping out the input stream for another.",14,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"r"}}],[11,"reset_data","","Resets the state of this decoder's data",14,{"inputs":[{"name":"self"}],"output":null}],[11,"get_ref","","Acquires a reference to the underlying stream",14,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"get_mut","","Acquires a mutable reference to the underlying stream",14,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Consumes this decoder, returning the underlying reader.",14,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"total_in","","Returns the number of bytes that the decompressor has consumed.",14,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"total_out","","Returns the number of bytes that the decompressor has produced.",14,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"read","","",14,null],[11,"new","flate2::write","Creates a new decoder which will write uncompressed data to the stream.",15,{"inputs":[{"name":"w"}],"output":{"name":"decoderwriter"}}],[11,"reset","","Resets the state of this decoder entirely, swapping out the output stream for another.",15,{"inputs":[{"name":"self"},{"name":"w"}],"output":{"name":"result"}}],[11,"finish","","Consumes this encoder, flushing the output stream.",15,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"total_in","","Returns the number of bytes that the decompressor has consumed for decompression.",15,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"total_out","","Returns the number of bytes that the decompressor has written to its output stream.",15,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"write","","",15,null],[11,"flush","","",15,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"new","","Creates a new encoder which will use the given compression level.",16,{"inputs":[{"name":"w"},{"name":"compression"}],"output":{"name":"encoderwriter"}}],[11,"finish","","Finish encoding this stream, returning the underlying writer once the encoding is done.",16,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"write","","",16,null],[11,"flush","","",16,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"drop","","",16,{"inputs":[{"name":"self"}],"output":null}],[11,"new","flate2::read","Creates a new encoder which will use the given compression level.",17,{"inputs":[{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreader"}}],[11,"into_inner","","Returns the underlying stream, consuming this encoder",17,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"read","","",17,null],[11,"new","flate2::bufread","Creates a new encoder which will use the given compression level.",18,{"inputs":[{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreaderbuf"}}],[11,"into_inner","","Returns the underlying stream, consuming this encoder",18,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"read","","",18,null],[11,"new","flate2::read","Creates a new decoder from the given reader, immediately parsing the gzip header.",19,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"header","","Returns the header associated with this stream.",19,{"inputs":[{"name":"self"}],"output":{"name":"header"}}],[11,"read","","",19,null],[11,"new","","Creates a new decoder from the given reader, immediately parsing the gzip header. If the gzip stream contains multiple members all will be decoded.",20,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"header","","Returns the current header associated with this stream.",20,{"inputs":[{"name":"self"}],"output":{"name":"header"}}],[11,"read","","",20,null],[11,"new","flate2::bufread","Creates a new decoder from the given reader, immediately parsing the gzip header.",21,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"header","","Returns the header associated with this stream.",21,{"inputs":[{"name":"self"}],"output":{"name":"header"}}],[11,"read","","",21,null],[11,"new","","Creates a new decoder from the given reader, immediately parsing the gzip header. If the gzip stream contains multiple members all will be decoded.",22,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"header","","Returns the current header associated with this stream.",22,{"inputs":[{"name":"self"}],"output":{"name":"header"}}],[11,"read","","",22,null],[11,"new","flate2::write","Creates a new encoder which will write compressed data to the stream given at the given compression level.",23,{"inputs":[{"name":"w"},{"name":"compression"}],"output":{"name":"encoderwriter"}}],[11,"reset","","Resets the state of this encoder entirely, swapping out the output stream for another.",23,{"inputs":[{"name":"self"},{"name":"w"}],"output":{"name":"result"}}],[11,"finish","","Consumes this encoder, flushing the output stream.",23,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"write","","",23,null],[11,"flush","","",23,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"new","flate2::read","Creates a new encoder which will read uncompressed data from the given stream and emit the compressed stream.",24,{"inputs":[{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreader"}}],[11,"reset","","Resets the state of this encoder entirely, swapping out the input stream for another.",24,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"r"}}],[11,"get_ref","","Acquires a reference to the underlying stream",24,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"get_mut","","Acquires a mutable reference to the underlying stream",24,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Consumes this encoder, returning the underlying reader.",24,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"read","","",24,null],[11,"new","flate2::bufread","Creates a new encoder which will read uncompressed data from the given stream and emit the compressed stream.",25,{"inputs":[{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreaderbuf"}}],[11,"reset","","Resets the state of this encoder entirely, swapping out the input stream for another.",25,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"r"}}],[11,"get_ref","","Acquires a reference to the underlying stream",25,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"get_mut","","Acquires a mutable reference to the underlying stream",25,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Consumes this encoder, returning the underlying reader.",25,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"read","","",25,null],[11,"new","flate2::read","Creates a new decoder which will decompress data read from the given stream.",26,{"inputs":[{"name":"r"}],"output":{"name":"decoderreader"}}],[11,"new_with_buf","","Same as `new`, but the intermediate buffer for data is specified.",26,{"inputs":[{"name":"r"},{"name":"vec"}],"output":{"name":"decoderreader"}}],[11,"reset","","Resets the state of this decoder entirely, swapping out the input stream for another.",26,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"r"}}],[11,"get_ref","","Acquires a reference to the underlying stream",26,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"get_mut","","Acquires a mutable reference to the underlying stream",26,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Consumes this decoder, returning the underlying reader.",26,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"total_in","","Returns the number of bytes that the decompressor has consumed.",26,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"total_out","","Returns the number of bytes that the decompressor has produced.",26,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"read","","",26,null],[11,"new","flate2::bufread","Creates a new decoder which will decompress data read from the given stream.",27,{"inputs":[{"name":"r"}],"output":{"name":"decoderreaderbuf"}}],[11,"reset","","Resets the state of this decoder entirely, swapping out the input stream for another.",27,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"r"}}],[11,"get_ref","","Acquires a reference to the underlying stream",27,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"get_mut","","Acquires a mutable reference to the underlying stream",27,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Consumes this decoder, returning the underlying reader.",27,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"total_in","","Returns the number of bytes that the decompressor has consumed.",27,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"total_out","","Returns the number of bytes that the decompressor has produced.",27,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"read","","",27,null],[11,"new","flate2::write","Creates a new decoder which will write uncompressed data to the stream.",28,{"inputs":[{"name":"w"}],"output":{"name":"decoderwriter"}}],[11,"reset","","Resets the state of this decoder entirely, swapping out the output stream for another.",28,{"inputs":[{"name":"self"},{"name":"w"}],"output":{"name":"result"}}],[11,"finish","","Consumes this encoder, flushing the output stream.",28,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"total_in","","Returns the number of bytes that the decompressor has consumed for decompression.",28,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"total_out","","Returns the number of bytes that the decompressor has written to its output stream.",28,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"write","","",28,null],[11,"flush","","",28,{"inputs":[{"name":"self"}],"output":{"name":"result"}}]],"paths":[[4,"Status"],[4,"Flush"],[4,"Compression"],[3,"GzBuilder"],[3,"GzHeader"],[3,"DataError"],[3,"Compress"],[3,"Decompress"],[8,"FlateReadExt"],[8,"FlateWriteExt"],[3,"DeflateEncoder"],[3,"DeflateEncoder"],[3,"DeflateEncoder"],[3,"DeflateDecoder"],[3,"DeflateDecoder"],[3,"DeflateDecoder"],[3,"GzEncoder"],[3,"GzEncoder"],[3,"GzEncoder"],[3,"GzDecoder"],[3,"MultiGzDecoder"],[3,"GzDecoder"],[3,"MultiGzDecoder"],[3,"ZlibEncoder"],[3,"ZlibEncoder"],[3,"ZlibEncoder"],[3,"ZlibDecoder"],[3,"ZlibDecoder"],[3,"ZlibDecoder"]]};
searchIndex["miniz_sys"] = {"doc":"","items":[[3,"mz_stream","miniz_sys","",null,null],[12,"next_in","","",0,null],[12,"avail_in","","",0,null],[12,"total_in","","",0,null],[12,"next_out","","",0,null],[12,"avail_out","","",0,null],[12,"total_out","","",0,null],[12,"msg","","",0,null],[12,"state","","",0,null],[12,"zalloc","","",0,null],[12,"zfree","","",0,null],[12,"opaque","","",0,null],[12,"data_type","","",0,null],[12,"adler","","",0,null],[12,"reserved","","",0,null],[4,"mz_internal_state","","",null,null],[5,"mz_deflateInit2","","",null,null],[5,"mz_deflate","","",null,null],[5,"mz_deflateEnd","","",null,null],[5,"mz_deflateReset","","",null,null],[5,"mz_inflateInit2","","",null,null],[5,"mz_inflate","","",null,null],[5,"mz_inflateEnd","","",null,null],[5,"mz_crc32","","",null,null],[6,"mz_alloc_func","","",null,null],[6,"mz_free_func","","",null,null],[17,"MZ_NO_FLUSH","","",null,null],[17,"MZ_PARTIAL_FLUSH","","",null,null],[17,"MZ_SYNC_FLUSH","","",null,null],[17,"MZ_FULL_FLUSH","","",null,null],[17,"MZ_FINISH","","",null,null],[17,"MZ_BLOCK","","",null,null],[17,"MZ_OK","","",null,null],[17,"MZ_STREAM_END","","",null,null],[17,"MZ_NEED_DICT","","",null,null],[17,"MZ_ERRNO","","",null,null],[17,"MZ_STREAM_ERROR","","",null,null],[17,"MZ_DATA_ERROR","","",null,null],[17,"MZ_MEM_ERROR","","",null,null],[17,"MZ_BUF_ERROR","","",null,null],[17,"MZ_VERSION_ERROR","","",null,null],[17,"MZ_PARAM_ERROR","","",null,null],[17,"MZ_DEFLATED","","",null,null],[17,"MZ_DEFAULT_WINDOW_BITS","","",null,null],[17,"MZ_DEFAULT_STRATEGY","","",null,null]],"paths":[[3,"mz_stream"]]};
initSearch(searchIndex);
