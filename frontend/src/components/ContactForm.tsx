import { useState } from "react";

export default function Contactform(){
    const [name, setName] = useState<string>('');
    const [textarea, setTextarea] = useState<string>('');
    const [formError, setFormError] = useState(false); 

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (name.length > 2 && textarea.length > 2) {
      setName('');
      setTextarea('');
      setFormError(false);
    } else {
      setFormError(true);
    }
  };

    const updateName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const updateTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTextarea(e.target.value);
    
    return (
    <section className="contactClass">
        <h2>Send meg melding</h2>
        <form onSubmit={handleSubmit}>
          {formError && <p style={{ color: 'yellow' }}>*Både navn og text må være mer enn 2 tegn langt.</p>}
            <label htmlFor="name"> Ditt Navn:
            <input id="name" name="name" type="text" value={name} onChange={updateName}/>
          </label>
          <label htmlFor="textarea"> Din melding:
            <textarea id="textarea" name="textarea" value={textarea} onChange={updateTextarea}/>
          </label>
          <button type="submit">Send melding</button>
        </form>
        <h2>Forhåndsvis din melding</h2>
        <pre>
          {JSON.stringify({ name })}
        </pre>
        <pre>
          {JSON.stringify({ textarea })}
        </pre>
    </section>
    );
  };