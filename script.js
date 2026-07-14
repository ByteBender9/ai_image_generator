const prompt = document.getElementById("prompt");
const counter = document.getElementById("count");

const clearBtn = document.getElementById("clearBtn");
const generateBtn = document.getElementById("generateBtn");

const loading = document.getElementById("loading");
const result = document.getElementById("result");

const image = document.getElementById("generatedImage");

const downloadBtn = document.getElementById("downloadBtn");
const againBtn = document.getElementById("againBtn");

const MAX_LENGTH = 300;



// Character Counter

prompt.addEventListener("input", () => {

    counter.textContent = `${prompt.value.length} / ${MAX_LENGTH}`;

});



// Clear Button

clearBtn.addEventListener("click", () => {

    prompt.value = "";
    counter.textContent = `0 / ${MAX_LENGTH}`;

    result.classList.add("hidden");

});




// Generate Image

generateBtn.addEventListener("click", async () => {

    const text = prompt.value.trim();

    if(text === "")
    {
        alert("Please enter a prompt.");
        return;
    }

    loading.classList.remove("hidden");
    result.classList.add("hidden");

    generateBtn.disabled = true;
    generateBtn.innerText = "Generating...";



    try{

        await new Promise(resolve => setTimeout(resolve,3000));

        const imageURL =
        `https://picsum.photos/800/500?random=${Date.now()}`;

        image.src = imageURL;

        downloadBtn.onclick = () => {

            const link = document.createElement("a");

            link.href = imageURL;
            link.download = "generated-image.jpg";

            link.click();

        };

        loading.classList.add("hidden");
        result.classList.remove("hidden");

    }

    catch(error){

        alert("Something went wrong.");

        console.error(error);

        loading.classList.add("hidden");

    }

    finally{

        generateBtn.disabled = false;
        generateBtn.innerText = "Generate Image";

    }

});




// Generate Another

againBtn.addEventListener("click",()=>{

    result.classList.add("hidden");

    prompt.focus();

});