window.onload = function ()
		{
			//BACKHAIR
			var charabackhair = new Image();
			var charabackhairnum = Math.floor(Math.random()*2)+1;
			var charabackhairname = "body" + charabackhairnum + ".png";
			charabackhair.src = charabackhairname;

			//BODY
			var charabody = new Image();
			var charabodynum = Math.floor(Math.random()*2)+1;
			var charabodyname = "body" + charabodynum + ".png";
			charabody.src = charabodyname;

			//FACE
			var charaface = new Image();
			var charafacenum = Math.floor(Math.random()*5)+1;
			var charafacename = "face" + charafacenum + ".png";
			charaface.src = charafacename;

			//EYES
			var charaeyes = new Image();
			var charaeyesnum = Math.floor(Math.random()*5)+1;
			var charaeyesname = "eyes" + charaeyesnum + ".png";
			charaeyes.src = charaeyesname;

			//EYEBROWS
			var charaeyebrows = new Image();
			var charaeyebrowsnum = Math.floor(Math.random()*5)+1;
			var charaeyebrowsname = "eyebrows" + charaeyebrowsnum + ".png";
			charaeyebrows.src = charaeyebrowsname;

			//MOUTH
			var charamouth = new Image();
			var charamouthnum = Math.floor(Math.random()*4)+1;
			var charamouthname = "mouth" + charamouthnum + ".png";
			charamouth.src = charamouthname;

			//NOSE
			var charanose = new Image();
			var charanosenum = Math.floor(Math.random()*5)+1;
			var charanosename = "nose" + charanosenum + ".png";
			charanose.src = charanosename;

			//FRONTHAIR
			var charafronthair = new Image();
			var charafronthairnum = Math.floor(Math.random()*4)+1;
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
				//DRAW BACKHAIR
				ctx.drawImage(charabackhair,33, 71, 104, 124, 21, 20, 87, 104);
				//DRAW BODY
				ctx.drawImage(charabody,((500-charabody.width)/2),50);
				//DRAW FACE
				ctx.drawImage(charahead,((500-charahead.width)/2),50);
				//DRAW EYES
				ctx.drawImage(charaeyes,((500-charaeyes.width)/2),50);
				//DRAW EYEBROWS
				ctx.drawImage(charaeyebrows,((500-charaeyebrows.width)/2),50);
				//DRAW MOUTH
				ctx.drawImage(charamouth,((500-charamouth.width)/2),50);
				//DRAW NOSE
				ctx.drawImage(charanose,((500-charanose.width)/2),50);
				//DRAW FRONTHAIR
				ctx.drawImage(charafronthair,((500-charafronthair.width)/2),50);
			}
		}