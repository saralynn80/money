function MoneyFormat(labelValue) {
  				// Nine Zeroes for Billions
  				if(labelValue >= 1000000000){
  					var labelValue = (labelValue / 1000000000).toFixed(0);
  					var labelValue = labelValue + "B";
  					console.log(labelValue);
  					return labelValue;
  				}else if(labelValue >= 1000000 ){
  					var labelValue = (labelValue / 1000000).toFixed(0);
  					var labelValue = labelValue + "M";
  					console.log(labelValue);
  					return labelValue;
  				}else if(labelValue >= 1000 ){
  					var labelValue =(labelValue / 1000).toFixed(0);
  					var labelValue = labelValue + "K";
  					console.log(labelValue);
  					return labelValue;
  				}else{
  					console.log(labelValue);
  					return labelValue;
  				}

   			}