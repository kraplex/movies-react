import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap';
import {v4 as guid} from 'uuid';
import {saveData} from "../Api/Api";
import {connect} from "react-redux";


class AddEditMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleOriginal: '',
            titleRus: '',
            year: '',
            director: '',
            actors: [],
            imdb: '',
            description: '',
            posterLink: '',
            showAddEditModal: false,
            country: ''
        }
    }

    setValue = (key, value) => {
        this.setState({[key]: value})
    }

    handleSave = () => {


        let movie = {
            titleOriginal: this.state.titleOriginal,
            titleRus: this.state.titleRus,
            year: this.state.year,
            country: this.state.country,
            director: this.state.director,
            actors: this.state.actors,
            imdb: this.state.imdb,
            description: this.state.description,
            posterLink: this.state.posterLink,
            id: guid()
        }
        saveData(movie)
        this.setValue('showAddEditModal', false);
    }


    render() {

        const {setValue} = this;
        const {showAddEditModal} = this.state;

        return (
            <>
                <li className='nav-item'>
                    <Button id='add-new' type='button' onClick={() => setValue('showAddEditModal', true)}>Добавить
                        новый</Button>
                </li>
                <Modal dialogClassName={'modal-lg'} show={showAddEditModal}
                       onHide={() => setValue('showAddEditModal', false)}>
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
                                           setValue('titleRus', value);
                                       }}/>
                            </div>
                            <div className='form-group'>
                                <label>Оригинальное название фильма:</label>
                                <input type='text'
                                       className='form-control'
                                       onChange={({target: {value}}) => {
                                           setValue('titleOriginal', value);
                                       }}/>
                            </div>
                            <div className='form-group'>
                                <label>Ссылка на постер:</label>
                                <input type='text'
                                       className='form-control'
                                       placeholder='https://...'
                                       onChange={({target: {value}}) => {
                                           setValue('posterLink', value);
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
                                                   setValue('year', value);
                                               }}/>
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <label className='col-sm-2 col-form-label'>Страна:</label>
                                    <div className='col-sm-10'>
                                        <input type='text'
                                               className='form-control'
                                               onChange={({target: {value}}) => {
                                                   setValue('country', value);
                                               }}/>
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <label className='col-sm-2 col-form-label'>Режиссер:</label>
                                    <div className='col-sm-10'>
                                        <input type='text'
                                               className='form-control'
                                               onChange={({target: {value}}) => {
                                                   setValue('director', value);
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
                                            <svg className='octicon octicon-x' viewBox='0 0 14 18' version='1.1'
                                                 width='14'
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
                                              setValue('actors', value.split(','));
                                          }}/>
                            </div>
                            <div className='form-group'>
                                <label>Рейтинг IMDB:</label>
                                <input type='text'
                                       className='form-control'
                                       onChange={({target: {value}}) => {
                                           setValue('imdb', value);
                                       }}/>
                            </div>
                            <div className='form-group'>
                                <label>Описание:</label>
                                <textarea className='form-control'
                                          rows='3'
                                          onChange={({target: {value}}) => {
                                              setValue('description', value);
                                          }}/>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary'
                                onClick={() => setValue('showAddEditModal', false)}>Отменить</Button>
                        <Button variant='primary' onClick={this.handleSave}>Сохранить</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = store => {
    return {}
}

const AddEditMovieWrapper = connect(mapStateToProps, {})(AddEditMovie)

export default AddEditMovieWrapper