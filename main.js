window.onload = function ()
		{
			//BACKHAIR
			var charabackhair = new Image();
			var charabackhairnum = Math.floor(Math.random()*1)+1;
			var charabackhairname = "backhair" + charabackhairnum + ".png";
			charabackhair.src = charabackhairname;

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
			charabackhair.onload = function()
			{
				buildchara();
			}

			//BODY LOAD
			charabody.onload = function()
			{
				buildchara();
			}

			//FACE LOAD
			charahead.onload = function()
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
				canvas.width = 	400;
				canvas.height = 400;

				//BACKGROUND COLOUR
				var r = Math.floor(Math.random() * (255 - 100 - 1) + 100);
				var g = Math.floor(Math.random() * (255 - 100 - 1) + 100);
				var b = Math.floor(Math.random() * (255 - 100 - 1) + 100);
				var bgcol = "#" + r.toString(16) + g.toString(16) + b.toString(16);
				ctx.fillStyle = bgcol;
				ctx.fillRect (0, 0, 400, 400);

				//DRAW BACKHAIR
				ctx.drawImage(charabackhair,((400-charabackhair.width)/2),50);
				//DRAW BODY
				ctx.drawImage(charabody,((400-charabody.width)/2),50);
				//DRAW FACE
				ctx.drawImage(charahead,((400-charahead.width)/2),50);
				//DRAW EYES
				ctx.drawImage(charaeyes,((400-charaeyes.width)/2),50);
				//DRAW EYEBROWS
				ctx.drawImage(charaeyebrows,((400-charaeyebrows.width)/2),50);
				//DRAW MOUTH
				ctx.drawImage(charamouth,((400-charamouth.width)/2),50);
				//DRAW NOSE
				ctx.drawImage(charanose,((400-charanose.width)/2),50);
				//DRAW FRONTHAIR
				ctx.drawImage(charafronthair,((400-charafronthair.width)/2),50);

			}
		}