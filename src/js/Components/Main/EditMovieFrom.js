import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {connect} from "react-redux";
import {editMovie, saveEditedMovie, saveMovie, setMovieToEdit} from "../Redux/moviesReducer";

class EditMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditForm: false,
        }
    }

    setValue = (key, value) => this.setState({[key]: value});

    handleSave = () => {
        this.props.saveEditedMovie(this.props.movieToEdit);
        this.setValue('showEditForm', false);
    }

    render() {
        const {setValue} = this;
        const {showEditForm} = this.state;
        const {movieId, setMovieToEdit, movieToEdit, editMovie} = this.props;

        return (<>
            <li className='nav-item'>
                <Button variant="primary" onClick={() => {
                    setMovieToEdit(movieId);
                    setValue('showEditForm', true);
                }}>Редактировать</Button>
            </li>
            <Modal dialogClassName={'modal-lg'} show={showEditForm}
                   onHide={() => setValue('showEditForm', false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5 className='modal-title'>Редактировать фильм</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='w-75 mx-auto'>
                        <div className='form-group'>
                            <label>Название фильма:</label>
                            <input type='text'
                                   value={movieToEdit.titleRus}
                                   className='form-control'
                                   onChange={({target: {value}}) => editMovie({key: 'titleRus', value})}/>
                        </div>
                        <div className='form-group'>
                            <label>Оригинальное название фильма:</label>
                            <input type='text'
                                   value={movieToEdit.titleOriginal}
                                   className='form-control'
                                   onChange={({target: {value}}) => editMovie({key: 'titleOriginal', value})}/>
                        </div>
                        <div className='form-group'>
                            <label>Ссылка на постер:</label>
                            <input type='text'
                                   className='form-control'
                                   value={movieToEdit.posterLink}
                                   placeholder='https://...'
                                   onChange={({target: {value}}) => editMovie({key: 'posterLink', value})}/>
                        </div>
                        <fieldset className='form-group'>
                            <legend className='col-form-label pt-0'>Детальная информация:</legend>
                            <div className='form-group row'>
                                <label className='col-sm-2 col-form-label'>Год:</label>
                                <div className='col-sm-10'>
                                    <input type='text'
                                           className='form-control'
                                           value={movieToEdit.year}
                                           onChange={({target: {value}}) => editMovie({key: 'year', value})}/>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-2 col-form-label'>Страна:</label>
                                <div className='col-sm-10'>
                                    <input type='text'
                                           className='form-control'
                                           value={movieToEdit.country}
                                           onChange={({target: {value}}) => editMovie({key: 'country', value})}/>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-2 col-form-label'>Режиссер:</label>
                                <div className='col-sm-10'>
                                    <input type='text'
                                           value={movieToEdit.director}
                                           className='form-control'
                                           onChange={({target: {value}}) => editMovie({key: 'director', value})}/>
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
                                      value={movieToEdit.actors?.join(', ')}
                                      placeholder='Укажите актеров через запятую.'
                                      onChange={({target: {value}}) => editMovie({
                                          key: 'actors',
                                          value: value.split(',')
                                      })}/>
                        </div>
                        <div className='form-group'>
                            <label>Рейтинг IMDB:</label>
                            <input type='text'
                                   value={movieToEdit.imdb}
                                   className='form-control'
                                   onChange={({target: {value}}) => editMovie({key: 'imdb', value})}/>
                        </div>
                        <div className='form-group'>
                            <label>Описание:</label>
                            <textarea className='form-control'
                                      rows='3'
                                      value={movieToEdit.description}
                                      onChange={({target: {value}}) => editMovie({key: 'description', value})}/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary'
                            onClick={() => setValue('showEditForm', false)}>Отменить</Button>
                    <Button variant='primary' onClick={this.handleSave}>Сохранить</Button>
                </Modal.Footer>
            </Modal>
        </>)
    }
}

const mapStateToProps = store => (
    {
        allMovies: store.movies.allMovies,
        movieToEdit: store.movies.movieToEdit,
    }
);
const EditMovieWrapper = connect(mapStateToProps, {saveMovie, setMovieToEdit, editMovie, saveEditedMovie})(EditMovie);
export default EditMovieWrapper;