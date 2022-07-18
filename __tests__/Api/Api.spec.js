import {saveData, editData, getData, deleteData, searchData} from '../../src/js/Components/Api/Api';
import {v4 as guid} from 'uuid';

describe('Api', () => {

    it('saveData', () => {
        window.localStorage.setItem('movies', JSON.stringify([{}]))
        saveData({})
    });

    it('editData', () => {
        const id = guid()
        window.localStorage.setItem('movies', JSON.stringify([{
            titleOriginal: '',
            titleRus: '',
            year: '',
            director: '',
            actors: [],
            imdb: '',
            description: '',
            posterLink: '',
            showAddForm: false,
            country: '',
            id
        }]))
        editData({
            titleOriginal: '',
            titleRus: '',
            year: '',
            director: '',
            actors: [],
            imdb: '',
            description: '',
            posterLink: '',
            showAddForm: false,
            country: '',
            id
        })
    });

    it('getData', () => {
        const id = guid()
        window.localStorage.setItem('movies', JSON.stringify([{id}]))
        getData(id)
        getData()
    });

    it('deleteData', () => {
        const id = guid()
        window.localStorage.setItem('movies', JSON.stringify([{id}]))
        deleteData(id)
    });

    it('searchData', () => {
        window.localStorage.setItem('movies', JSON.stringify([{titleRus: 'test'}]))
        searchData('test')
        searchData('1')
    });
});
