import React from 'react'
import { Button, Modal } from 'react-bootstrap';


const AddNewMovieModal = () => {

    return (
        <Modal.Dialog className={"modal-lg"}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h5 className="modal-title">Добавить новый фильм</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="w-75 mx-auto">
                    <div className="form-group">
                        <label>Название фильма:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Оригинальное название фильма:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="upload-poster-addon">Постер</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="upload-poster"
                                   aria-describedby="upload-poster-addon"/>
                            <label className="custom-file-label" htmlFor="upload-poster">Выберите файл</label>
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <legend className="col-form-label pt-0">Детальная информация:</legend>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Год:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Страна:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Слоган:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Режиссер:</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary btn-add-field" type="button">
                                    <svg className="octicon octicon-plus" viewBox="0 0 12 16" version="1.1"
                                         width="12"
                                         height="16" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-5">
                                <input type="text" className="form-control" placeholder="Должность"/>
                            </div>
                            <div className="col-sm-5">
                                <input type="text" className="form-control" placeholder="Имя"/>
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-danger btn-sm btn-remove-field" type="button">
                                    <svg className="octicon octicon-x" viewBox="0 0 14 18" version="1.1" width="14"
                                         height="18" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <label>В ролях:</label>
                        <textarea className="form-control" rows="3"></textarea>
                        <small className="form-text text-muted">Укажите актеров через запятую.</small>
                    </div>
                    <div className="form-group">
                        <label>Рейтинг IMDB:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Описание:</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Отменить</Button>
                <Button variant="primary">Сохранить</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default AddNewMovieModal