import { Component} from '@angular/core';

@Component({
         selector: 'app-pizza',
         templateUrl: `./pizza.component.html` 

})

export class PizzaComponent{
    pizzas: any[] = [{'type':'Margherita',
                     'small':75,
                     'medium':180,
                     'large':330,
                     'id':'24d16ca6d1179bed'},

                     { 'type':'Fresh Veggie',
                       'small':130,
                        'medium':265,
                        'large':425,
                        'id':'f149f239d263497f'},

                       {'type':'Country Special',
                       'small':150,
                       'medium':280,
                       'large':450,
                       'id':'bbf504c6fc34a88f'},

                       {'type':'Farmhouse',
                       'small':175,
                       'medium':325,
                       'large':490,
                       'id':'a86ad231cfe4294f'},

                       {'type':'Mexican Green Wave',
                       'small':190,
                       'medium':350,
                       'large':520,
                       'id':'8d07b45bf3fff86e'},

                        {'type':'Barbeque Chicken',
                        'small':210,
                        'medium':370,
                        'large':525,
                        'id':'715768d48266f997'},

                         {'type':'hicken Mexicana',
                         'small':225,
                         'medium':390,
                         'large':540,
                         'id':'3f2a7549a2da88c8'}

       ]




}