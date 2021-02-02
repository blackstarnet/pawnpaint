import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';
import Helper_class from './../../libs/helpers.js';

class Help_about_class {

	constructor() {
		this.Helper = new Helper_class();
		this.target = document.getElementById("main_menu");

		this.set_events();
	}

	set_events() {
		document.addEventListener('keydown', (event) => {
			const key = (event.key || '').toLowerCase();
			if (this.Helper.is_input(event.target))
				return;

			if (key == "b" && (event.ctrlKey == true || event.metaKey)) {
				this.toggle();
				event.preventDefault();
			}
		}, false);
	}

	toggle() {
		if (this.target.style['display'] != 'none') {
			this.target.style['display'] = 'none';
		} else {
			this.target.style['display'] = 'inline';
		}
	}

}

export default Help_about_class;