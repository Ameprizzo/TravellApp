import './styles/base.scss'
import './styles/form.scss'
import 'bootstrap'
import 'jquery'

import {
    handleSearch,
    handleSave,
    handleCancel
} from "./js/indexscript";


/* Add event listeners */

document.getElementById('button_search').addEventListener('click', handleSearch);

document.querySelector('.trip_save').addEventListener('click', handleSave);

document.querySelectorAll('.trip_cancel').forEach(element => {
    element.addEventListener('click', handleCancel);
});