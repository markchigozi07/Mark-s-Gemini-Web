async function askGemini(params) {}
    constinput= document.getElementById("input").ariaValueMax;
    constresponseBox=document.getElementById("responseBox");
    
    ResponseBox.innerHTML="Thinking";
constresponse=await fetch("AIzaSyAJ3zgqBl_JECbGlb7S52LkJEAcykJvov8"),{
    method:"POST",
    headers:{
        "content-Type":"application/json"
    },
    body:JSON.stringify({
        contents:[{
            parts:[{text:input}]
        }]
    }),
constdata=await res.json(),
constoutput=data.candidates?.[0]?.content?.parts?.[0]?.text||"No response.",

responseBox.innerHTML
}