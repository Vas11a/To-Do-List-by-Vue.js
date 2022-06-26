

Vue.createApp({
	data() {
		return{
			valueInput: "Hallo",
			notes: [],
			place: '',
			dark: true,
			white: false,
		};
	},

	methods: {
		addTask() {
			if (this.valueInput.length < 2) {
				this.place = "Enter something!"
			} else {
				
				this.notes.push(this.valueInput);
				this.valueInput = ""
				this.place = ""
			}

			
		},
		clearTask() {
			this.notes = []
			this.place = ""
		},

		clearThis(idx) {
			this.notes.splice(idx, 1);
		},

		whiteT() {
			if (this.white === false) {
				this.white = true
				this.dark = false
			}
			
		},

		darkT() {
			if (this.dark === false) {
				this.dark = true
				this.white = false
			}
		
		},
		
	}
}).mount('#app')
