
import { useState } from "react";

export default function useStates(){

    const [on, setOn] = useState<boolean>(false);
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [option, setOption] = useState("");
  
    const handleOn = () => {
      setOn(!on);
      console.log("esto es ON", on);
    };
  
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };
    const handleChangeLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastname(e.target.value);
    };
    const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(e.target.value);
    };
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
    const handleChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
      setOption(e.target.value);
    };
  
    const handleSubmit = () => {
      console.log("Esto es lo que guarda:", {
        name: name,
        lastname: lastname,
        phone: phone,
        email: email,
        option: option,
      });
      setTimeout(() => {
        setName("");
        setLastname("");
        setPhone("");
        setEmail("");
      }, 1000);
    };
  
    return{
        on,
        name,
        lastname,
        phone,
        email,
        option,

        handleOn,
        handleChangeName,
        handleChangeLastname,
        handleChangePhone,
        handleChangeEmail,
        handleChangeOption,
        handleSubmit,
    }
}