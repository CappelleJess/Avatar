window.onload = function ()
		{
			//BACKHAIR
			var backhair = new Image();
			var backhairnum = Math.floor(Math.random()*35)+1;
			var backhairname = "items/backhair/backhair" + backhairnum + ".png";
			backhair.src = backhairname;

			//BODY
			var body = new Image();
			var bodynum = Math.floor(Math.random()*25)+1;
			var bodyname = "items/body/body" + bodynum + ".png";
			body.src = bodyname;

			//CLOTHES
			var clothes = new Image();
			var clothesnum = Math.floor(Math.random()*12)+1;
			var clothesname = "items/clothes/clothes" + clothesnum + ".png";
			clothes.src = clothesname;

			//EYES
			var eyes = new Image();
			var eyesnum = Math.floor(Math.random()*30)+1;
			var eyesname = "items/eyes/eyes" + eyesnum + ".png";
			eyes.src = eyesname;

			//EYEBROWS
			var eyebrows = new Image();
			var eyebrowsnum = Math.floor(Math.random()*20)+1;
			var eyebrowsname = "items/eyebrows/eyebrows" + eyebrowsnum + ".png";
			eyebrows.src = eyebrowsname;

			//MOUTH
			var mouth = new Image();
			var mouthnum = Math.floor(Math.random()*25)+1;
			var mouthname = "items/mouth/mouth" + mouthnum + ".png";
			mouth.src = mouthname;

			//NOSE
			var nose = new Image();
			var nosenum = Math.floor(Math.random()*4)+1;
			var nosename = "items/nose/nose" + nosenum + ".png";
			nose.src = nosename;

			//FRONTHAIR
			var fronthair = new Image();
			var fronthairnum = Math.floor(Math.random()*35)+1;
			var fronthairname = "items/fronthair/fronthair" + fronthairnum + ".png";
			fronthair.src = fronthairname;

			//BACKHAIR LOAD
			backhair.onload = function()
			{
				buildchara();
			}	

			//BODY LOAD
			body.onload = function()
			{
				buildchara();
			}

			//CLOTHES LOAD
			clothes.onload = function()
			{
				buildchara();
			}

			//EYES LOAD
			eyes.onload = function()
			{
				buildchara();
			}

			//EYEBROWS LOAD
			eyebrows.onload = function()
			{
				buildchara();
			}

			//MOUTH LOAD
			mouth.onload = function()
			{
				buildchara();
			}

			//NOSE LOAD
			nose.onload = function()
			{
				buildchara();
			}

			//FRONTHAIR LOAD
			fronthair.onload = function()
			{
				buildchara();
			}

			function buildchara()
			{
				var canvas = document.getElementById('canvas'),
                ctx = canvas.getContext('2d');

				//DRAW BACKHAIR
				ctx.drawImage(backhair, 0, 0);
				//DRAW BODY
				ctx.drawImage(body, 0, 0);
				//DRAW CLOTHES
				ctx.drawImage(clothes, 0, 0);
				//DRAW EYES
				ctx.drawImage(eyes, 0, 0);
				//DRAW EYEBROWS
				ctx.drawImage(eyebrows, 0, 0);
				//DRAW MOUTH
				ctx.drawImage(mouth, 0, 0);
				//DRAW NOSE
				ctx.drawImage(nose, 0, 0);
				//DRAW FRONTHAIR
				ctx.drawImage(fronthair, 0, 0);
			}
		}