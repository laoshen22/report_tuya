window["viz_Wjf9hjP9"]= {"name":"Wjf9hjP9","displayName":"Chart 6","dependencies":["tuyadat_1"],"transformName":"tuyadat_1_eWA6vRQ4","options":{"marker":"line","x":{"name":"@timestamp.x","validName":"`@timestamp.x`","type":"Date","isNumeric":false,"isDate":true,"func":"dayofyear","label":"c1","validLabel":"c1"},"y":{"name":".dummy.column.name.for.count.column","validName":".dummy.column.name.for.count.column","isNumeric":true,"isDate":false,"type":"numrows","func":"count","label":"c2","validLabel":"c2"},"size":"","color":{"name":"first_date","validName":"first_date","type":"Date","isNumeric":false,"isDate":true,"func":"dayofyear","label":"c3","validLabel":"c3"},"text":"","shape":"","facetcolumn":"","facetrow":"","barstyle":"stack","barsort":"off","label":"","colh":"","rowh":"","meas":"","scatterText":"","randomSeed":"1","treatNAAsZero":"on","mapmode":"USA-states","columns":[{"name":"uuid","type":"character","escapedName":"uuid","isNumeric":false,"isDate":false},{"name":"@timestamp.x","type":"Date","escapedName":"`@timestamp.x`","isNumeric":false,"isDate":true},{"name":"event.x","type":"character","escapedName":"event.x","isNumeric":false,"isDate":false},{"name":"first_date","type":"Date","escapedName":"first_date","isNumeric":false,"isDate":true},{"name":"last_date","type":"Date","escapedName":"last_date","isNumeric":false,"isDate":true},{"name":"age","type":"difftime","escapedName":"age","isNumeric":false,"isDate":false},{"name":"BUY.date","type":"Date","escapedName":"BUY.date","isNumeric":false,"isDate":true},{"name":"BUY","type":"character","escapedName":"BUY","isNumeric":false,"isDate":false}],"data":{"c3":["2020-01-20","2020-01-21","2020-01-22","2020-01-23","2020-01-24","2020-01-25","2020-01-26","2020-01-27","2020-01-28","2020-01-29","2020-01-20","2020-01-20","2020-01-20","2020-01-20","2020-01-20","2020-01-20","2020-01-20","2020-01-20","2020-01-20","2020-01-20","2020-01-21","2020-01-21","2020-01-21","2020-01-21","2020-01-21","2020-01-21","2020-01-21","2020-01-21","2020-01-21","2020-01-22","2020-01-22","2020-01-22","2020-01-22","2020-01-22","2020-01-22","2020-01-22","2020-01-22","2020-01-23","2020-01-23","2020-01-23","2020-01-23","2020-01-23","2020-01-23","2020-01-23","2020-01-24","2020-01-24","2020-01-24","2020-01-24","2020-01-24","2020-01-24","2020-01-25","2020-01-25","2020-01-25","2020-01-25","2020-01-25","2020-01-26","2020-01-26","2020-01-26","2020-01-26","2020-01-27","2020-01-27","2020-01-27","2020-01-28","2020-01-28","2020-01-29"],"c1":[20,20,20,20,20,20,20,20,20,20,20,21,22,23,24,25,26,27,28,29,21,22,23,24,25,26,27,28,29,22,23,24,25,26,27,28,29,23,24,25,26,27,28,29,24,25,26,27,28,29,25,26,27,28,29,26,27,28,29,27,28,29,28,29,29],"c2":[null,null,null,null,null,null,null,null,null,null,236,183,173,151,107,140,135,148,139,58,662,226,242,205,211,209,212,257,121,342,114,84,107,94,94,109,43,169,60,47,67,57,58,28,101,51,46,30,31,14,137,30,41,36,13,143,33,35,16,126,32,16,83,14,50],"..is.order.row":["TRUE","TRUE","TRUE","TRUE","TRUE","TRUE","TRUE","TRUE","TRUE","TRUE",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},"query":"try(jsonlite::toJSON({.dqdf <- `tuyadat_1_eWA6vRQ4`;\n.dqdf %>% \ndplyr::ungroup() %>% \ndplyr::mutate_if(bit64::is.integer64, as.numeric) %>% \nmutate_if(lubridate::is.period, lubridate::as.difftime) %>% \nmutate_if(lubridate::is.interval, lubridate::as.difftime) %>% \ndplyr::mutate(c3=(function(x) {\n  if (!is.factor(x)) {\n    x <- factor(x) \n  }; \n  if (length(unique(x)) <= 20) {\n    return (x); \n  };\n  return (\n    forcats::fct_lump(\n      x, \n      n=20,\n      ties.method =\"first\",\n      other_level = \"Others\"\n    )\n  )\n})(lubridate::yday(first_date)),c1=lubridate::yday(`@timestamp.x`),c2=1) %>% \ndplyr::mutate(c3 =  dplyr::recode(c3, `20` = \"2020-01-20\", `21` = \"2020-01-21\", `22` = \"2020-01-22\", `23` = \"2020-01-23\", `24` = \"2020-01-24\", `25` = \"2020-01-25\", `26` = \"2020-01-26\", `27` = \"2020-01-27\", `28` = \"2020-01-28\", `29` = \"2020-01-29\")) %>% \ndplyr::filter(!is.na(c3) & !is.na(c1)) %>% \ndplyr::group_by (c3,c1) %>% \ndplyr::summarise(c2=n()) %>% \ndplyr::ungroup() %>% \ndplyr::arrange(c3,c1) %>% \n(function(df) {   `_tam_setCurrentVizDataCache`(df, type=\"groupby\", colnames=c(\"c3\"=\"first_date\", \"c1\"=\"@timestamp.x\", \"c2\"=\"(Number of Rows)\"))\n  return (df);}) %>% \n  `_tam_add_order_rows`( target=c(\"c3\"), \"c3\", \"c1\") %>% \n `_tam_convertLogicalToCharacter`()\n}\n, na=\"null\" , dataframe=\"columns\", digits=10))","pieHole":"55","pivotShowTotals":"on","pivotShowRowTotals":"on","_desktopVersion":"5.4.2.2","displayName":"Chart 6","sampleDataSize":0,"sortTarget":null,"yUse2ndAxis":null,"colorBucketGroup":"all","xBucketGroup":"all","yBucketGroup":null,"y0":null,"pivotColor":"none","height":500,"width":800,"mapZoomStatus":null,"pivotClientSortIndex":null,"pivotClientSortDirection":null,"rowh0":null,"meas0":null,"colh0":null,"meas0EnableOtherGroup":null,"meas0NumGroupsToPreserve":null,"meas0ShowOtherGroup":null,"meas0OtherGroupLabel":null,"meas0OtherGroupValues":null,"meas1":null,"yReflineType":"none","_canvasWidth":711,"_canvasHeight":766,"colorbucket":null,"yEnableOtherGroup":null,"yNumGroupsToPreserve":null,"yShowOtherGroup":null,"yOtherGroupLabel":null,"yOtherGroupValues":null,"xEnableOtherGroup":null,"xNumGroupsToPreserve":null,"xShowOtherGroup":null,"xOtherGroupLabel":null,"xOtherGroupValues":null,"categColorEnableOtherGroup":null,"categColorNumGroupsToPreserve":null,"categColorShowOtherGroup":null,"categColorOtherGroupLabel":null,"categColorOtherGroupValues":null,"y1":null,"y1TrendLine":"none","y2TrendLine":"none","y3TrendLine":"none","y4TrendLine":"none","y5TrendLine":"none","y6TrendLine":"none","y7TrendLine":"none","y8TrendLine":"none","y9TrendLine":"none","y10TrendLine":"none","y11TrendLine":"none","y12TrendLine":"none","y13TrendLine":"none","y14TrendLine":"none","y15TrendLine":"none","y16TrendLine":"none","y17TrendLine":"none","y18TrendLine":"none","y19TrendLine":"none","y20TrendLine":"none","y21TrendLine":"none","y22TrendLine":"none","y23TrendLine":"none","y24TrendLine":"none","y25TrendLine":"none","y26TrendLine":"none","y27TrendLine":"none","y28TrendLine":"none","y29TrendLine":"none","maxNUniqOnX":"","numDecimalDigits":"","useThousandSeparator":"on","yValueOnPlotFontSize":"","xAxisShowRangeSlider":"off","legendFontSize":"","legendShowFuncName":"on","title":"每日登录次数vintage","titleFontSize":"","xAxisShowTitle":"on","xAxisTitle":"日期","xAxisTitleFontSize":"","xAxisCurrencySymbol":"","xAxisNumDecimalDigits":"","xAxisRange":"","xAxisTickStep":"","xAxisTickFontSize":"","yAxisShowTitle":"on","yAxisTitle":"登陆次数","yAxisTitleFontSize":"","yAxisCurrencySymbol":"","y1AxisNumDecimalDigits":"","yAxisRange":"","yAxisTickStep":"","yAxisIncludeZero":"on","yAxisTickFontSize":"","y2AxisShowTitle":"on","y2AxisTitle":"","y2AxisTitleFontSize":"","y2AxisCurrencySymbol":"","y2AxisNumDecimalDigits":"","y2AxisRange":"","y2AxisTickStep":"","y2AxisIncludeZero":"on","y2AxisTickFontSize":"","axisAutoMargin":"on","marginTop":"","marginBottom":"","marginLeft":"","marginRight":"","colorRecode":{"20":"2020-01-20","21":"2020-01-21","22":"2020-01-22","23":"2020-01-23","24":"2020-01-24","25":"2020-01-25","26":"2020-01-26","27":"2020-01-27","28":"2020-01-28","29":"2020-01-29"}},"timestamp":"2020-01-30T12:36:27.927Z","updatedBy":"","thumbnail":null,"snapshot":null,"publicTitle":"","publicDescription":"","publicDataSourceURL":"","withSteps":false,"privateShare":true,"sharedURL":"","previousSharedURL":"","sharedDate":null,"publishSizeOption":null,"insightMetaInfo":{"version":1,"url":null,"isPrivate":false,"thumbnail":null,"title":"","description":"","learnMoreUrl":null,"exampleUrl":null,"sharedFileTypes":[],"withSteps":false,"dataSourceURL":""},"preprocessor":"","_tags":null,"filterCommand":{"name":"filter","conditions":[]},"variables":[],"tabIndex":2,"_isDirty":false,"_createdVersion":"5.4.2.2","annotation":"","_tempAnnotation":"","_tempDisplayName":"","_thumbnailFileName":""}