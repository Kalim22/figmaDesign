import React, { useRef, useState } from 'react'
import Input from '../../components/inputs/Input'
import Button from '../../components/button/Button'
import { FaWhatsapp } from "react-icons/fa";
import Sidemenu from '../../components/sidemenu/Sidemenu';
import { useNavigate } from 'react-router-dom'
import { FiAtSign } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import './contact.css'

function Contact() {

    const navigate = useNavigate()
    const scrollRef = useRef()
    const [file, setFile] = useState(null)
    const [uploadImagesrc, setUploadImagesrc] = useState([])
    const [value, setValue] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: ''
    })

    const { name, email, message, phone, surname } = value

    const handleChange = e => {
        if (phone.length > 10) {
            alert("Phone number can't be greater than 10 digits")
            return setValue({
                phone: phone.substring(0, phone.length - 1)
            })
        }
        setValue({ ...value, [e.target.name]: e.target.value })
    }


    const handleFile = e => {
        const fileSrc = e.target.files[0]
        setFile(fileSrc)
        return setUploadImagesrc([...uploadImagesrc, URL.createObjectURL(fileSrc)])
    }

    const handleDelete = id => {
        const deletedItem = uploadImagesrc?.filter(ele => ele !== id)
        return setUploadImagesrc(deletedItem)
    }

    const handleSubmit = e => {
        e.preventDefault()
        try {
            return navigate('/message')
        } catch (error) {
            console.log(error)
        }
    }

    const handleScroll = px => {
        return scrollRef.current.scrollLeft += px
    }

    return (
        <section className='contact__container'>
            <Sidemenu />
            <div className='contact__form'>
                <p>Contact Us</p>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='input__container'>
                        <Input
                            className="form__input"
                            placeholder="Name"
                            value={name}
                            name="name"
                            onChange={handleChange}
                        />
                        <Input
                            className="form__input"
                            placeholder="Surname"
                            name="surname"
                            value={surname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input__container'>
                        <Input
                            type={'email'}
                            className="form__input"
                            placeholder="Email"
                            value={email}
                            name="email"
                            onChange={handleChange}
                        />
                        <Input
                            className="form__input"
                            placeholder="Telephone"
                            value={phone}
                            name={'phone'}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input__container'>
                        <Input
                            className="form__input"
                            placeholder="Evaluation Request"
                            value="Evaluation Request"
                        />
                    </div>
                    <textarea
                        placeholder='How can we help her?'
                        className='form__input'
                        style={{ width: '100%' }}
                        rows={7}
                        value={message}
                        name='message'
                        onChange={handleChange}
                        required
                    />
                    <div className='upload__container'>
                        <div className={`${uploadImagesrc?.length < 1 ? 'upload__input__container' : 'upload__input__container__before'}`}
                            style={{ width: uploadImagesrc?.length < 1 ? '100%' : '50px ' }}>
                            <Input
                                type={'file'}
                                placeholder={'upload file'}
                                multiple={true}
                                onChange={handleFile}
                            />
                        </div>
                        <div className='upload__images__container' style={{ width: uploadImagesrc.length < 1 ? '0' : '100%' }} ref={scrollRef}>
                            {
                                uploadImagesrc && uploadImagesrc?.map((ele, idx) => {
                                    return (
                                        <div className='image__box' onClick={() => handleDelete(ele)}>
                                            <img key={idx} src={ele} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            uploadImagesrc?.length > 0 ?
                                <MdOutlineKeyboardArrowRight
                                    size={20}
                                    className='arrowRight'
                                    onClick={() => handleScroll(30)} />
                                : null
                        }
                    </div>
                    <Button
                        buttonText="Send Message"
                        type="submit"
                    />
                </form>
            </div>
            <div className='additional__details'>
                <div className='phone__detail'>
                    <FaWhatsapp size={30} className='icons'/>
                    <p>You prefer to use whatsapp ?</p>
                    <p>+39 331 9467237</p>
                </div>
                <div className='email__detail'>
                    <FiAtSign size={30} className='icons'/>
                    <p>You prefer to send us an email ?</p>
                    <p>info@mediatrade.com</p>
                </div>
            </div>
        </section>
    )
}

export default Contact
