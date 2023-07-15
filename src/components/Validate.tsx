import React, { useEffect, useState } from 'react'

type Props = {}

const Validate = (props: Props) => {
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [gioitinh, setGioitinh] = useState<string>('')
    const [capbac, setCapbac] = useState<number>(1)
    const [day, setDay] = useState<number>(0)
    const [chucvu, setChucvu] = useState<string>('Nhân viên')
    const [money, setMoney] = useState<number>(0)
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);



    const [profile, setProfile] = useState<any[]>([])





    useEffect(() => {
        fetch('http://localhost:3000/comments').then(res => res.json()).then(data => { setProfile(data) })
    }, [])
    console.log(profile)





    const handleSubmit = (e: any) => {
        e.preventDefault()
        // console.log(email)
        // console.log(name)
        // console.log(gioitinh)
        // console.log(capbac)
        // console.log(day)
        // console.log(chucvu)
        let errorList: string[] = [];



        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (name.length == 0) {
            errorList.push('Tên không được để trống')
        }
        ///
        if (email.length == 0) {
            errorList.push('Email không được để trống')
        }
        else if (!emailPattern.test(email)) {
            errorList.push('Email không đúng định dạng');
        }
        if (gioitinh === '') {
            errorList.push('Vui lòng chọn giới tính');
        }
        if (day <= 0) {
            errorList.push('Số ngày nằm viện phải lớn hơn 0');
        }
        if (errorList.length > 0) {
            setErrors(errorList);
            setSubmitted(false);
        } else {
            setErrors([]);
            setSubmitted(true);
        }

    }
    const calculatePayment = () => {
        let payment = 0;
        switch (chucvu) {
            case "Nhân viên":
                switch (capbac) {
                    case 1:
                        payment = day * 1200;
                        break;
                    case 2:
                        payment = day * 2400;
                        break;
                    case 3:
                        payment = day * 3600;
                        break;
                }
                break;
            case "Cán bộ":
                switch (capbac) {
                    case 1:
                        payment = day * 2400;
                        break;
                    case 2:
                        payment = day * 3600;
                        break;
                    case 13:
                        payment = day * 4800;
                        break;
                }
                break;
            case "Quản lí":
                switch (capbac) {
                    case 1:
                        payment = day * 3600;
                        break;
                    case 2:
                        payment = day * 4800;
                        break;
                    case 3:
                        payment = day * 6000;
                        break;
                }
                break;
            default:
                break;
        }
        return payment;
    };
    // console.log(submit)

    return <>
        <form action="">

            <label htmlFor=""> Tên
                <input type="text" onChange={(event) => setName(event.target.value)} />
            </label>
            <br /> <br />
            <label htmlFor="">Email
                <input type="text" onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br /> <br />


            <label htmlFor=""> Chọn giới tính
                <input type="radio" value='nam' name='gioitinh' onChange={() => setGioitinh('nam')} /> Nam
                <input type="radio" value='nữ' name='gioitinh' onChange={() => setGioitinh('nữ')} /> Nữ
            </label> <br /> <br />


            <label htmlFor="">Cấp bậc
                <select name="" id="" onChange={(event) => setCapbac(Number(event.target.value))}>
                    <option value="1">Cấp 1 </option>
                    <option value="2">Cấp 2</option>
                    <option value="3">Cấp 3</option>
                </select>
            </label> <br /> <br />


            <label htmlFor=""> Số ngày nằm viện
                <input type="number" onChange={(event) => setDay(Number(event.target.value))} />
            </label>
            <br /> <br />


            <label htmlFor="">Chức vụ
                <select name="" id="" onChange={(event) => setChucvu(event.target.value)}>
                    <option value="Nhân viên">Nhân viên</option>
                    <option value="Cán bộ">Cán bộ</option>
                    <option value="Quản lí">Quản lí</option>
                </select>
            </label> <br /> <br />


            <button onClick={handleSubmit}>Submit</button>


        </form>
        {submitted && errors.length === 0 && <div><br /> {gioitinh == 'nam' ? 'Ông' : 'Bà'}  Tên: {name} cấp bậc: {capbac} là {chucvu} được chi trả {calculatePayment()}</div>}

        {errors.length > 0 && (
            <div>
                <h3>Có lỗi xảy ra:</h3>
                <ul>
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            </div>
        )}
        {profile.map((p) => {
            <div>{p.id}</div>
        })}

    </>
}

export default Validate