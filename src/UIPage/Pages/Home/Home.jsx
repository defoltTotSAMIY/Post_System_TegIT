import React from 'react';
import { Input_1 } from "./../../../Components";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Home.scss";
import Table from "./../../Components/Table/Table";
import { HomeFirstTable } from "./../../Components/Table/TableItems";




export default function Home() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 mt-3'>
                        <div className="row">
                            <div className="col-2">
                                <SelectSmall />
                            </div>
                            <div className="col-3">
                                <input type="text" placeholder='Nomi' className='form-control mt-2' readOnly />
                            </div>
                            <div className="col-1">
                                <input type="text" placeholder='Qoldigi' className='form-control mt-2' readOnly />
                            </div>
                            <div className="col-2">
                                <input type="text" placeholder='Narxi' className='form-control mt-2' readOnly />
                            </div>
                            <div className="col-1">
                                <input type="text" placeholder='Soni' className='form-control mt-2' />
                            </div>
                            <div className="col-2">
                                <input type="text" placeholder='Obshiy Summasi' className='form-control mt-2' readOnly />
                            </div>
                            <div className="col-1">
                                <button className='btn btn-outline-danger mt-2'>Tozalash</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className="row mt-4">
                        <div className='col-9'>
                            <div className='divTable col-12'>
                                <Table className="tableComponent"
                                    header={HomeFirstTable}
                                />
                            </div>
                            <div className='col-12'>
                                <div className='row mt-3'>
                                    <div className='col-1'>
                                        <label htmlFor="">Soni</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor="">Summasi</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor="">Qancha Tulashi</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className='col-2'>
                                        <label htmlFor="">Qarz Summasi</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className='col-3'>
                                        <button className='btn btn-outline-success mt-4'>Sotish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 bg-light'>
                            <div className='col-12'>
                                <div className="d-flex justify-content-center">
                                    <button className='bntNumber btn btn-outline-dark'>1</button>
                                    <button className='bntNumber btn btn-outline-dark ms-2'>2</button>
                                    <button className='bntNumber btn btn-outline-dark ms-2'>3</button>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <button className='bntNumber btn btn-outline-dark'>4</button>
                                    <button className='bntNumber btn btn-outline-dark ms-2'>5</button>
                                    <button className='bntNumber btn btn-outline-dark ms-2'>6</button>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <button className='bntNumber btn btn-outline-dark'>7</button>
                                    <button className='bntNumber btn btn-outline-dark ms-2'>8</button>
                                    <button className='bntNumber btn btn-outline-dark ms-2'>9</button>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <button className='bntNumber btn btn-outline-dark'>*</button>
                                    <button className='bntNumber btn btn-outline-dark ms-2'>0</button>
                                    <button className='bntNumber btn btn-outline-dark ms-2'>#</button>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex justify-content-evenly mt-4">
                                    <button className='btnFunction btn btn-outline-dark'><i class='bx bx-upvote bx-rdark bx-rotate-270 fs-2 mt-1' ></i></button>
                                    <button className='btnFunction btn btn-outline-dark'><i class='bx bx-x-circle fs-2 mt-1' ></i></button>
                                    <button className='btnFunction btn btn-outline-dark'><i class='bx bx-upvote fs-2 mt-1'></i></button>
                                    <button className='btnFunction btn btn-outline-dark'><i class='bx bx-upvote bx-rotate-180 fs-2 mt-1' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>s
        </>
    )
}



export function SelectSmall() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">Turi</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={10}>Sotishn</MenuItem>
                <MenuItem value={20}>Qaytib Olish</MenuItem>
                <MenuItem value={30}>Nasiyaga berish</MenuItem>
            </Select>
        </FormControl>
    );
}

