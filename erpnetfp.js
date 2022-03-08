
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/json2/20160511/json2.min.js" integrity="sha512-uWk2ZXl3GVrq6DZsrL5dSg1S/F3MNQ9VaDFigqXOoKUnWG58UxOuJGfTrzh5KjpoBvPiFniL2PahU2HUTFMJXw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<button id="target"> Print</button>

<script>
$( "#target" ).click(function() {
	var obj ={
  		"uniqueSaleNumber": "DT279013-DD01-184923",
  		"items": [
			{
                "text": "Product name",
                "quantity": "1",
                "unitPrice": "12.50",
                "taxGroup": "2"
            },{
                "type": "comment",
                "text": "Comment for row"
            },
			{
				"type": "footer-comment",
				"text": "Footer text here"
			}
  		],
  		"payments": [
    		{
      			"amount": 12.50,
     			"paymentType": "cash"
    		}
  		]	
	};
	dbParam = JSON.stringify(obj);
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "http://127.0.0.1:8001/printers/dt853771/receipt");
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.send(dbParam);
	xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		console.log(this.responseText);
	}
	}

});
</script>
