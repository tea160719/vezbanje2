import './AddContact.scss'
import { useState } from 'react';

function AddContact({ onClose, onClientAdded }){

    const [Ime,setIme]=useState('');
    const [Email,setEmail]=useState('');
    const [Phone,setPhone]=useState('');
    const [PoslovnoLice,setPoslovnoLice]=useState(false);
    const [imeError, setImeError] = useState('');
    
    const promeniDugme = (event) => {
        setPoslovnoLice(event.target.value==='true');
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (Ime.length < 3) {
            setImeError('Ime mora imati najmanje 3 karaktera.');
            return;
        }
        if (Ime[0] !== Ime[0].toUpperCase()) {
            setImeError('Ime mora početi velikim slovom.');
            return; 
        }
        
        setImeError('');
        const noviKontakt = {
            Ime,
            Email,
            Phone,
            PoslovnoLice,
        };

        try{
            const response = await fetch('http://localhost:5074/api/Klijenti',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(noviKontakt),
            });
            if(response.ok){
                setIme('');
                setEmail('');
                setPhone('');
                setPoslovnoLice(false);
                onClientAdded();
            }
            else{
                console.error("Došlo je do greške prilikom dodavanja korisnika");
            }
        }
        catch(error){
            console.error(error);
        }
    };

    return(
    <div className='popup-container'>
        <h1>Unesite kontakt</h1>
        <div className='popup'>
            <form className='forma' onSubmit={handleSubmit}>
                {/* 1. red: Ime */}
                <div className='form-group-container'>
                    <div className='form-group'>
                        <label htmlFor='ime'>Ime</label>
                        <input type='text' id='ime' value={Ime} onChange={(e)=>setIme(e.target.value)}></input>
                    </div>
                    {imeError && <p className="error-message">{imeError}</p>}
                </div>

                {/* 2. red: Broj telefona */}
                <div className='form-group'>
                    <label htmlFor='phone'>Broj telefona</label>
                    <input type='text' id='phone' value={Phone} onChange={(e)=>setPhone(e.target.value)}></input>
                </div>
                
                {/* 3. red: Email */}
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' value={Email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                
                {/* 4. red: Poslovno lice */}
                <div className='form-group'>
                    <label>Poslovno lice</label>
                    <div className='radio-group'>
                        <label>Da</label>
                        <input type='radio' id='yes' name='PoslovnoLice' value='true' checked={PoslovnoLice===true} onChange={promeniDugme}></input>
                        <label>Ne</label>
                        <input type='radio' id='no' name='PoslovnoLice' value='false' checked={PoslovnoLice===false} onChange={promeniDugme}></input>
                    </div>
                </div>
                
                <div className="button-group">
                    <button type='submit' >Pošalji</button>
                    <button type="button" onClick={onClose}>Zatvori</button>
                </div>
            </form>
        </div>
    </div>
);

}
export default AddContact;