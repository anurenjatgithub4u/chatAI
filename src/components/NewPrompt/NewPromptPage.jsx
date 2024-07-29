import React from "react";
import '../../components/NewPrompt/NewPromptPage.css'

const NewPromptPage = () => {

  const enRef = useRef(null);

  useEffect(() => {
    enRef.current.scrollIntoView({ behaviour: "smooth" });
  }, []);

  return (
    <>

    <div className="endChat"  ref={enRef}>  </div>
      <form className="newForm">

<label htmlFor="file">   


<img src="/attachment.png" alt="" />

</label>
<input  id="file" type="file"   multiple={false}  hidden/>


<input type="text"  placeholder="Ask anything...." />

<button>
    <img src="./arrow.png" alt="" />
</button>
      </form>
    
    </>
  );
};

export default NewPromptPage;
