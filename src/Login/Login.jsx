import React from 'react';
import tegit from "../Admin/assets/Images/img.png";
import "./Login.css";



function Login() {
    return (
        <>
            <img src={tegit} className="tegit-img  mx-auto d-block" alt="" />
            <div className='div-all container justify-content-center border border-light rounded-3 bg-white shadow'>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-9">
                        <div className="mt-5">
                            <b className='fs-2 '>Kirish</b>
                        </div>
                        <label htmlFor="" className='mt-4 ' >Login</label>
                        <input type="text" className='form-control mt-2' placeholder="Login..." />
                        <label htmlFor="" className='mt-3' >Parol</label>
                        <input type="password" className='form-control mt-2' placeholder='Parol...' />
                        <div className='mt-3 d-flex flex-row-reverse'>
                            <div className="btn btn-info w-25 mt-3">KIRISH</div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Login;
