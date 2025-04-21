import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Футболка спортивная',
    description: 'Легкая футболка из дышащего материала, идеальна для занятий спортом и активного отдыха. Отводит влагу, сохраняет свежесть длительное время.',
    price: 1490,
    category: 'sport',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Белый', 'Серый'],
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    ],
    inStock: true
  },
  {
    id: 2,
    name: 'Джинсы повседневные',
    description: 'Классические джинсы прямого кроя из высококачественного денима. Комфортная посадка, идеально подходят для повседневной носки.',
    price: 3200,
    category: 'casual',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Синий', 'Черный'],
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1604176424472-9d080b2dff0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    ],
    inStock: true
  },
  {
    id: 3,
    name: 'Толстовка с капюшоном',
    description: 'Теплая толстовка с капюшоном из мягкого хлопка. Удобный карман-кенгуру, регулируемый капюшон. Подходит для прохладной погоды.',
    price: 2700,
    category: 'casual',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Серый', 'Черный', 'Синий'],
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1579304733998-3abece540ccc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    ],
    inStock: true
  },
  {
    id: 4,
    name: 'Спортивные штаны',
    description: 'Легкие спортивные штаны из эластичного материала. Идеально подходят для тренировок и бега. Имеют карманы и регулируемый пояс.',
    price: 2100,
    category: 'sport',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Серый', 'Синий'],
    images: [
      'https://images.unsplash.com/photo-1626307416562-ee839676f5fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1580906462791-bd9d472b1403?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1616257893323-fb07b48b908d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    ],
    inStock: true
  },
  {
    id: 5,
    name: 'Рубашка повседневная',
    description: 'Классическая рубашка из 100% хлопка. Прямой крой, отложной воротник. Подходит для офиса и повседневной носки.',
    price: 2950,
    category: 'casual',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Белый', 'Голубой', 'Бежевый'],
    images: [
      'https://images.unsplash.com/photo-1598961942613-ba897716405b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    ],
    inStock: true
  },
  {
    id: 6,
    name: 'Куртка спортивная',
    description: 'Легкая спортивная куртка с водоотталкивающей пропиткой. Защищает от ветра и небольшого дождя. Имеет вентиляционные элементы.',
    price: 4500,
    category: 'sport',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Синий'],
    images: [
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1560769680-ba2f3767c785?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1605908502724-9093a79a1b39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    ],
    inStock: true
  }
];
