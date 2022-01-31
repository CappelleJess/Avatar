window.onload = function ()
		{
			//BACKHAIR
			var chara_backhair_array = ["backhair1.png", "backhair2.png", "backhair3.png", "backhair4.png"];

			//BODY
			var charabody = new Image();
			var charabodynum = Math.floor(Math.random()*4)+1;
			var charabodyname = "body" + charabodynum + ".png";
			charabody.src = charabodyname;

			//FACE
			var charaface = new Image();
			var charafacenum = Math.floor(Math.random()*4)+1;
			var charafacename = "face" + charafacenum + ".png";
			charaface.src = charafacename;

			//EYES
			var charaeyes = new Image();
			var charaeyesnum = Math.floor(Math.random()*4)+1;
			var charaeyesname = "eyes" + charaeyesnum + ".png";
			charaeyes.src = charaeyesname;

			//EYEBROWS
			var charaeyebrows = new Image();
			var charaeyebrowsnum = Math.floor(Math.random()*4)+1;
			var charaeyebrowsname = "eyebrows" + charaeyebrowsnum + ".png";
			charaeyebrows.src = charaeyebrowsname;

			//MOUTH
			var charamouth = new Image();
			var charamouthnum = Math.floor(Math.random()*4)+1;
			var charamouthname = "mouth" + charamouthnum + ".png";
			charamouth.src = charamouthname;

			//NOSE
			var charanose = new Image();
			var charanosenum = Math.floor(Math.random()*4)+1;
			var charanosename = "nose" + charanosenum + ".png";
			charanose.src = charanosename;

			//FRONTHAIR
			var charafronthair = new Image();
			var charafronthairnum = Math.floor(Math.random()*1)+1;
			var charafronthairname = "fronthair" + charafronthairnum + ".png";
			charafronthair.src = charafronthairname;

			//BACKHAIR LOAD
			function getRandomImage(imgAr, path) {
    		path = path || 'Avatar/items/backhair/';
    		var num = Math.floor( Math.random() * imgAr.length );
    		var img = imgAr[ num ];
    		var imgStr = '<img src=' + path + img + '" alt = "">';
    		document.write(imgStr); document.close();
}

			//BODY LOAD
			charabody.onload = function()
			{
				buildchara();
			}

			//FACE LOAD
			charaface.onload = function()
			{
				buildchara();
			}

			//EYES LOAD
			charaeyes.onload = function()
			{
				buildchara();
			}

			//EYEBROWS LOAD
			charaeyebrows.onload = function()
			{
				buildchara();
			}

			//MOUTH LOAD
			charamouth.onload = function()
			{
				buildchara();
			}

			//NOSE LOAD
			charanose.onload = function()
			{
				buildchara();
			}

			//FRONTHAIR LOAD
			charafronthair.onload = function()
			{
				buildchara();
			}

			function buildchara()
			{
				var canvas = document.getElementById('canvas');
				var ctx = canvas.getContext('2');
				canvas.width = 	500;
				canvas.height = 500;

				//BACKGROUND COLOUR
				var r = Math.floor(Math.random() * (255 - 100 - 1) + 100);
				var g = Math.floor(Math.random() * (255 - 100 - 1) + 100);
				var b = Math.floor(Math.random() * (255 - 100 - 1) + 100);
				var bgcol = "#" + r.toString(16) + g.toString(16) + b.toString(16);
				ctx.fillStyle = bgcol;
				ctx.fillRect (0, 0, 500, 500);

				// //DRAW BACKHAIR
				// ctx.drawImage(charabackhair,((500-charabackhair.width)/2),50);
				// //DRAW BODY
				// ctx.drawImage(charabody,((500-charabody.width)/2),50);
				// //DRAW FACE
				// ctx.drawImage(charahead,((500-charahead.width)/2),50);
				// //DRAW EYES
				// ctx.drawImage(charaeyes,((500-charaeyes.width)/2),50);
				// //DRAW EYEBROWS
				// ctx.drawImage(charaeyebrows,((500-charaeyebrows.width)/2),50);
				// //DRAW MOUTH
				// ctx.drawImage(charamouth,((500-charamouth.width)/2),50);
				// //DRAW NOSE
				// ctx.drawImage(charanose,((500-charanose.width)/2),50);
				// //DRAW FRONTHAIR
				// ctx.drawImage(charafronthair,((500-charafronthair.width)/2),50);

			}
		}