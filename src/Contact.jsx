import React, { useState } from "react";

const Contact=()=>{
    const [data,setData]=useState({
        name:'',
        phone:'',
        email:'',
        message:'',
    });

    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });


    };

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Data registered for ${data.name}`);
    };
    return(

        <>
        <div className="my-5">
         <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" 
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                     placeholder="name@example.com"/>
                     </div>

                     <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full name</label>
                    <input type="text" class="form-control" 
                    name="name"
                    value={data.name}
                    onChange={InputEvent}
                     placeholder="Aman, Eklavya etc."/>
                     </div>

                     <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone number</label>
                    <input type="contact" class="form-control"  
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="+91-87388812378"/>
                     </div>

                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}                    
                    rows="3"></textarea>
                    </div>

                    <div class="col-12">
                    <button class="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>

        </>
    );

};

export default Contact;