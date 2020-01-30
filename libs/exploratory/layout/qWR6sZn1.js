window["viz_qWR6sZn1"]= {"name":"qWR6sZn1","displayName":"Chart 10","dependencies":["tuyadat_1"],"transformName":"tuyadat_1_eWA6vRQ4","options":{"marker":"pivot","x":"","y":"","size":"","color":"","text":"","shape":"","facetcolumn":"","facetrow":"","barstyle":"stack","barsort":"off","label":"","colh":"","rowh":"","meas":"","scatterText":"","randomSeed":"1","treatNAAsZero":"on","mapmode":"USA-states","columns":[{"name":"uuid","type":"character","escapedName":"uuid","isNumeric":false,"isDate":false},{"name":"@timestamp.x","type":"Date","escapedName":"`@timestamp.x`","isNumeric":false,"isDate":true},{"name":"event.x","type":"character","escapedName":"event.x","isNumeric":false,"isDate":false},{"name":"first_date","type":"Date","escapedName":"first_date","isNumeric":false,"isDate":true},{"name":"last_date","type":"Date","escapedName":"last_date","isNumeric":false,"isDate":true},{"name":"age","type":"difftime","escapedName":"age","isNumeric":false,"isDate":false},{"name":"BUY.date","type":"Date","escapedName":"BUY.date","isNumeric":false,"isDate":true},{"name":"BUY","type":"character","escapedName":"BUY","isNumeric":false,"isDate":false}],"data":[[["20","236","183","173","151","107","140","135","148","139","58"],["21",null,"662","226","242","205","211","209","212","257","121"],["22",null,null,"342","114","84","107","94","94","109","43"],["23",null,null,null,"169","60","47","67","57","58","28"],["24",null,null,null,null,"101","51","46","30","31","14"],["25",null,null,null,null,null,"137","30","41","36","13"],["26",null,null,null,null,null,null,"143","33","35","16"],["27",null,null,null,null,null,null,null,"126","32","16"],["28",null,null,null,null,null,null,null,null,"83","14"],["29",null,null,null,null,null,null,null,null,null,"50"]],["r0","20","21","22","23","24","25","26","27","28","29"],[10],[11],["236","845","741","676","557","693","724","741","780","373"],["1470","2345","987","486","273","257","227","174","97","50","6366"]],"query":"try(jsonlite::toJSON({.dqdf <- `tuyadat_1_eWA6vRQ4`;\n.dqdf %>% \ndplyr::ungroup() %>% \ndplyr::mutate_if(bit64::is.integer64, as.numeric) %>% \nmutate_if(lubridate::is.period, lubridate::as.difftime) %>% \nmutate_if(lubridate::is.interval, lubridate::as.difftime) %>% \ndplyr::mutate(`c0`=as.character((function(x) {\n  if (!is.factor(x)) {\n    x <- factor(x) \n  }; \n  if (length(unique(x)) <= 100) {\n    return (x); \n  };\n  return (\n    forcats::fct_lump(\n      x, \n      n=100,\n      ties.method =\"first\",\n      other_level = \"Others\"\n    )\n  )\n})(`_tam_convert_na`(lubridate::yday(`@timestamp.x`), drop.unused.levels=FALSE, na.alt.text=\"NA\"))),`r0`=(function(x) {\n  if (!is.factor(x)) {\n    x <- factor(x) \n  }; \n  if (length(unique(x)) <= 100) {\n    return (x); \n  };\n  return (\n    forcats::fct_lump(\n      x, \n      n=100,\n      ties.method =\"first\",\n      other_level = \"Others\"\n    )\n  )\n})(`_tam_convert_na`(lubridate::yday(`first_date`), drop.unused.levels=FALSE, na.alt.text=\"(NA)\")),`m0`=1) %>% \ndplyr::group_by(c0,r0, .drop=TRUE) %>% \ndplyr::summarize(`m0`=sum(as.numeric(`m0`), na.rm =!all(is.na(`m0`))),m0.nrow = n()) %>% \nungroup() %>% \ndplyr::mutate(m0 = (function(x, y){x[y==0]<-NA; return(x)})(m0,m0.nrow)) %>% \ndplyr::select(-m0.nrow) %>% \n(function(x) { .dqdf_ctotal <<- x %>% dplyr::ungroup() %>% dplyr::group_by(`c0`) %>% dplyr::summarize(`m0`=sum(as.numeric(`m0`), na.rm =!all(is.na(`m0`)))) %>% dplyr::arrange(c0); .dqdf_ctotal<<- c(as.character(.dqdf_ctotal[[\"m0\"]])) ; return (x) })  %>% \n(function(x) { .dqdf_rtotal <<- x %>%  dplyr::ungroup() %>% dplyr::group_by(`r0`) %>% dplyr::summarize(`m0`=sum(as.numeric(`m0`), na.rm =!all(is.na(`m0`)))) %>% dplyr::arrange(r0) ;.dqdf_rtotal<<- c(as.character(.dqdf_rtotal[[\"m0\"]])); return (x) })  %>% \n(function(x) { .dqdf_gtotal <<- x %>% dplyr::ungroup() %>% dplyr::summarize(`m0`=sum(as.numeric(`m0`), na.rm =!all(is.na(`m0`)))) ;.dqdf_gtotal<<- c(as.character(.dqdf_gtotal[[\"m0\"]])); .dqdf_rtotal<<-c(.dqdf_rtotal, .dqdf_gtotal)  ; return (x) })  %>% \ndplyr::ungroup() %>% \ndplyr::arrange(c0) %>% \ndplyr::mutate(c0 = fct_inorder(fct_explicit_na(factor(c0), na_level = \"NA\"))) %>% \ndplyr::mutate(m0= exploratory::impute_na(as.character(m0), type = \"value\", val = \"\")) %>% \ntidyr::unite(.pivot.measure.cell, m0, sep=\",\") %>% \n(function(x) { if(nrow(x) > 0) { return (tidyr::spread(x, c0, .pivot.measure.cell)); } else { return (  dplyr::select(x, -c0, -.pivot.measure.cell)) }})  %>% \ndplyr::ungroup() %>% \ndplyr::arrange(r0) %>% \n(function(df) { \n  .nrow <- nrow(df)\n  .ncol.org <- ncol(df)\n  .ncol <- min(.ncol.org, 301)\n  `_tam_setCurrentVizDataCache`(df, type=\"pivot\", colnames=c(\"first_date\"), nrowh=1, nmeas=1, colorbucket=FALSE)\n  .maxcell <- 10000\n  df <- df %>% dplyr::select(1:.ncol)\n  if (.nrow * .ncol > .maxcell) {\n    .maxrows <- as.integer(.maxcell/.ncol)\n    df <- dplyr::slice(df, 1:.maxrows)\n  }\n  df <- df %>% `_tam_convertLogicalToCharacter`()\n  return (list(df, colnames(df), .nrow, .ncol.org, .dqdf_ctotal, .dqdf_rtotal))\n})\n}\n, na=\"null\" , dataframe=\"values\", digits=10))","pieHole":"55","pivotShowTotals":"on","pivotShowRowTotals":"on","_desktopVersion":"5.4.2.2","displayName":"Chart 10","sampleDataSize":0,"sortTarget":null,"yUse2ndAxis":null,"colorBucketGroup":null,"xBucketGroup":null,"yBucketGroup":null,"y0":null,"pivotColor":"none","height":500,"width":800,"pivotClientSortIndex":null,"pivotClientSortDirection":null,"rowh0":{"name":"first_date","validName":"first_date","type":"Date","isNumeric":false,"isDate":true,"func":"dayofyear","label":"c1","validLabel":"c1"},"meas0":{"name":".dummy.column.name.for.count.column","validName":".dummy.column.name.for.count.column","isNumeric":true,"isDate":false,"type":"numrows","func":"count","label":"c3","validLabel":"c3"},"meas0WindowFuncDirection":null,"colh0":{"name":"@timestamp.x","validName":"`@timestamp.x`","type":"Date","isNumeric":false,"isDate":true,"func":"dayofyear","label":"c2","validLabel":"c2"},"maxNUniqOnRC":"","pivotMaxNumRows":"","pivotMasterFontSize":"","pivotShowUnusedFactorLevels":"off","numDecimalDigits":"","useThousandSeparator":"on","title":"每日登陆次数vintage","titleFontSize":"","rowh0Title":"","rowh0CellWidth":"","meas0CellWidth":"","pivotHideDataCells":"off","pivotSortWithinGroup":"on","meas0Title":"","meas0CurrencySymbol":"","colh0Title":"每日登陆次数","colh0ShowFuncName":"on"},"timestamp":"2020-01-30T12:36:28.295Z","updatedBy":"","thumbnail":null,"snapshot":null,"publicTitle":"","publicDescription":"","publicDataSourceURL":"","withSteps":false,"privateShare":true,"sharedURL":"","previousSharedURL":"","sharedDate":null,"publishSizeOption":null,"insightMetaInfo":{"version":1,"url":null,"isPrivate":false,"thumbnail":null,"title":"","description":"","learnMoreUrl":null,"exampleUrl":null,"sharedFileTypes":[],"withSteps":false,"dataSourceURL":""},"preprocessor":"","_tags":null,"filterCommand":{"name":"filter","conditions":[]},"variables":[],"tabIndex":9,"_isDirty":false,"_createdVersion":"5.4.2.2","annotation":"","_tempAnnotation":"","_tempDisplayName":"","_thumbnailFileName":""}