define(function() {
	var people = function (name, age) {
		this.data = {
			name: name,
			age: age
		}
		this.modify = function (name1, age1) {
			this.data.name = name1;
			this.data.age = age1
		}
		this.print = function () {
			console.log(this.data);
			return this.data
		}
	}


	return {
		people: people	
	}
})