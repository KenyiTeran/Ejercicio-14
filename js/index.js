// Declaramos el módulo de la aplicación y sus dependencias
var app = angular.module('salaryCalculatorApp', []);

// Creamos el controlador para la aplicación
app.controller('salaryCalculatorCtrl', function($scope) {
  // Inicializamos los valores del formulario
  $scope.employeeCode = '';
  $scope.hoursWorked = '';
  $scope.hourlyRate = '';

  // Función para calcular el salario básico
  $scope.calculateBasicSalary = function() {
    // Verificamos que los campos del formulario no estén vacíos
    if ($scope.employeeCode && $scope.hoursWorked && $scope.hourlyRate) {
      // Calculamos el salario básico
      $scope.basicSalary = $scope.hoursWorked * $scope.hourlyRate;

      // Aplicamos el descuento correspondiente según el salario bruto
      if ($scope.basicSalary < 500) {
        $scope.discount = 0;
      } else if ($scope.basicSalary >= 500 && $scope.basicSalary <= 1000) {
        $scope.discount = $scope.basicSalary * 0.02;
      } else if ($scope.basicSalary > 1000 && $scope.basicSalary <= 4000) {
        $scope.discount = $scope.basicSalary * 0.08;
      } else if ($scope.basicSalary > 4000 && $scope.basicSalary <= 8000) {
        $scope.discount = $scope.basicSalary * 0.15;
      } else if ($scope.basicSalary > 8000 && $scope.basicSalary <= 10000) {
        $scope.discount = $scope.basicSalary * 0.21;
      } else {
        $scope.discount = $scope.basicSalary * 0.3;
      }

      // Calculamos el salario neto
      $scope.netSalary = $scope.basicSalary - $scope.discount;
    }
  }
});
