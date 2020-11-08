function billCal()
{
	let unit=Number(document.getElementById('tunits').value);
	
	var kwh,fr,amount;
	if(unit<=58)
	{
		
		if(unit>=30)
		{
		    fr =60;
			kwh=29*2.5+((unit-29)*4.85);
			amount=kwh+fr;
		}
		else
		{
			fr=30
			kwh=unit*2.5;
			amount=kwh+fr;
		}
		
	}
	else
	{
		if(unit>=175)
		{
			fr=540
			kwh=(58*7.85)+(29*10)+(29*27.75)+(58*32)+((unit-174)*45);
			amount=kwh+fr;
		}
		else if(unit>=117 && unit<=174)
		{
			fr=480;
			kwh=(58*7.85)+(29*10)+(29*27.75)+((unit-116)*32);
			amount=kwh+fr
		}
		else if(unit>=88 && unit<=116)
		{
			fr=480;
			kwh=(58*7.85)+(29*10)+((unit-87)*27.75);
			amount=kwh+fr;
		}
		else
		{
			fr=90;
			kwh=(58*7.85)+((unit-58)*10);
			amount=kwh+fr;
		}
	}
	let tResult=document.getElementById('replace');
	tResult.innerHTML="<p>KWH Charge:  Rs "+kwh+"&nbsp &nbsp Fixed rate:  Rs "+fr+"</p>Total: Rs "+amount;

}
