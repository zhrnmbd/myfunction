export async function fetchweather(){
    const apikey="95a75ff5e705abd3c51d57c5e96c5cfb";
    const city=document.getElementById("chaxun").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=zh_cn`;
    try{
      const Response=await fetch(url);
      if(!Response.ok){
        throw new Error(`${city}`);
      }
      const data = await Response.json();  // 解析返回的 JSON 数据
      console.log(data);
      const temperature = data.main.temp;  // 获取温度
      const weatherDescription = data.weather[0].description;
      const Wendu=document.getElementById("wendu");
      Wendu.textContent=`${temperature}`;
      const Tianqi=document.getElementById("tianqi");
      Tianqi.textContent=`${weatherDescription}`;
    }
    catch(error){
      alert("获取程序失败！");
      console.log(`invalid city name!`,error);
    }
  }
