import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap';
import {v4 as guid} from 'uuid';
import {useHistory} from 'react-router-dom';
import {setMovie} from "../Redux/StateReducer";

const AddEditMovie = () => {

    let history = useHistory()

    const [titleOriginal, setTitleOriginal] = useState('');
    const [titleRus, setTitleRus] = useState('');
    const [year, setYear] = useState('');
    const [country, setCountry] = useState('');
    const [director, setDirector] = useState('');
    const [actors, setActors] = useState([]);
    const [imdb, setImdb] = useState('');
    const [description, setDescription] = useState('');
    const [posterLink, setPosterLink] = useState('');

    const [show, setShow] = useState(false);

    const handleSave = () => {
        let movie = {
            titleOriginal,
            titleRus,
            year,
            country,
            director,
            actors,
            imdb,
            description,
            posterLink,
            id: guid()
        }
        setMovie(movie)
        setShow(false);
        history.push('/all-movies');
    }


    return (
        <>
            <li className='nav-item'>
                <Button id='add-new' type='button' onClick={() => setShow(true)}>Добавить новый</Button>
            </li>
            <Modal dialogClassName={'modal-lg'} show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5 className='modal-title'>Добавить новый фильм</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='w-75 mx-auto'>
                        <div className='form-group'>
                            <label>Название фильма:</label>
                            <input type='text'
                                   className='form-control'
                                   onChange={({target: {value}}) => {
                                       setTitleRus(value);
                                   }}/>
                        </div>
                        <div className='form-group'>
                            <label>Оригинальное название фильма:</label>
                            <input type='text'
                                   className='form-control'
                                   onChange={({target: {value}}) => {
                                       setTitleOriginal(value);
                                   }}/>
                        </div>
                        <div className='form-group'>
                            <label>Ссылка на постер:</label>
                            <input type='text'
                                   className='form-control'
                                   placeholder='https://...'
                                   onChange={({target: {value}}) => {
                                       setPosterLink(value);
                                   }}/>
                        </div>
                        <fieldset className='form-group'>
                            <legend className='col-form-label pt-0'>Детальная информация:</legend>
                            <div className='form-group row'>
                                <label className='col-sm-2 col-form-label'>Год:</label>
                                <div className='col-sm-10'>
                                    <input type='text'
                                           className='form-control'
                                           onChange={({target: {value}}) => {
                                               setYear(value);
                                           }}/>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-2 col-form-label'>Страна:</label>
                                <div className='col-sm-10'>
                                    <input type='text'
                                           className='form-control'
                                        // onBlur={(e) => {
                                        //     validateInputText(e)
                                        // }}
                                           onChange={({target: {value}}) => {
                                               setCountry(value);
                                           }}/>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-2 col-form-label'>Режиссер:</label>
                                <div className='col-sm-10'>
                                    <input type='text'
                                           className='form-control'
                                        // onBlur={(e) => {
                                        //     validateInputText(e)
                                        // }}
                                           onChange={({target: {value}}) => {
                                               setDirector(value);
                                           }}/>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' placeholder='Должность'/>
                                </div>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' placeholder='Имя'/>
                                </div>
                                <div className='col-sm-2'>
                                    <button className='btn btn-primary btn-add-field' type='button'>
                                        <svg className='octicon octicon-plus' viewBox='0 0 12 16' version='1.1'
                                             width='12'
                                             height='16' aria-hidden='true'>
                                            <path fillRule='evenodd' d='M12 9H7v5H5V9H0V7h5V2h2v5h5v2z'/>
                                        </svg>
                                    </button>
                                </div>
                                <div className='col-sm-2'>
                                    <button className='btn btn-danger btn-sm btn-remove-field' type='button'>
                                        <svg className='octicon octicon-x' viewBox='0 0 14 18' version='1.1' width='14'
                                             height='18' aria-hidden='true'>
                                            <path fillRule='evenodd'
                                                  d='M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z'/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                        <div className='form-group'>
                            <label>В ролях:</label>
                            <textarea className='form-control'
                                      rows='3'
                                      placeholder='Укажите актеров через запятую.'
                                      onChange={({target: {value}}) => {
                                          setActors(value.split(',', ''))
                                      }}/>
                        </div>
                        <div className='form-group'>
                            <label>Рейтинг IMDB:</label>
                            <input type='text'
                                   className='form-control'
                                   onChange={({target: {value}}) => {
                                       setImdb(value);
                                   }}/>
                        </div>
                        <div className='form-group'>
                            <label>Описание:</label>
                            <textarea className='form-control'
                                      rows='3'
                                      onChange={({target: {value}}) => {
                                          setDescription(value);
                                      }}/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => setShow(false)}>Отменить</Button>
                    <Button variant='primary' onClick={handleSave}>Сохранить</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddEditMovie