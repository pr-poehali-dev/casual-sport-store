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
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
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
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
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
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
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
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
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
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
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
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    inStock: true
  }
];
