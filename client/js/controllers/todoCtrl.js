function todoCtrl($scope) {
	console.log($scope);
	$scope.tasks = [
		{
			task: 'Create nodejs app',
			date: '12:30'
		},
		{
			task: 'Create mongo database',
			date: '13:30'
		},
		{
			task: 'Add data to mongo',
			date: '14:30'
		},
		{
			task: 'Send data to view',
			date: '15:30'
		}
	];
}

angular.module('nodeApp')
	.controller('todoCtrl', ['$scope', todoCtrl]);
