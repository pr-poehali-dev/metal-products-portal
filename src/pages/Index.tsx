import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    productType: '',
    length: '',
    width: '',
    quantity: ''
  });
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = ['Главная', 'Продукция', 'Калькулятор', 'О компании', 'Портфолио', 'Доставка', 'Контакты'];

  const products = [
    {
      name: 'Доборные элементы кровли',
      description: 'Комплектующие для завершения кровельных работ',
      icon: 'Home',
      basePrice: 350
    },
    {
      name: 'Колпаки на трубы',
      description: 'Защита дымоходов от осадков',
      icon: 'Wind',
      basePrice: 1200
    },
    {
      name: 'Колпаки на забор',
      description: 'Декоративные и защитные элементы',
      icon: 'Square',
      basePrice: 800
    },
    {
      name: 'Отливы',
      description: 'Для окон и цоколя',
      icon: 'Waves',
      basePrice: 450
    },
    {
      name: 'Парапеты',
      description: 'Защита верхней части стен',
      icon: 'Box',
      basePrice: 950
    }
  ];

  const portfolioProjects = [
    {
      title: 'Загородный дом',
      description: 'Комплексное изготовление кровельных элементов',
      image: 'https://cdn.poehali.dev/projects/c7dff864-fa27-45c5-a25d-a9a5097f0f4a/files/a60205a0-e0ed-4d48-9e61-a6c68bca89f6.jpg'
    },
    {
      title: 'Производственный цех',
      description: 'Металлоконструкции и доборные элементы',
      image: 'https://cdn.poehali.dev/projects/c7dff864-fa27-45c5-a25d-a9a5097f0f4a/files/5db7dc02-d03a-4bba-8e65-1a2797a4e93e.jpg'
    },
    {
      title: 'Коттеджный поселок',
      description: 'Серийное производство элементов',
      image: 'https://cdn.poehali.dev/projects/c7dff864-fa27-45c5-a25d-a9a5097f0f4a/files/1b7c06f8-9f85-4e53-9cf9-6bfafc9682ec.jpg'
    }
  ];

  const calculatePrice = () => {
    const product = products.find(p => p.name === calculatorData.productType);
    if (!product) return;

    const length = parseFloat(calculatorData.length) || 0;
    const width = parseFloat(calculatorData.width) || 0;
    const quantity = parseInt(calculatorData.quantity) || 1;

    const area = length * width / 1000000;
    const price = product.basePrice * area * quantity;
    
    setCalculatedPrice(Math.round(price));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Factory" size={32} className="text-accent" />
              <span className="text-xl font-bold">МеталлПром</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Button className="hidden sm:flex bg-accent hover:bg-accent/90">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать звонок
              </Button>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px]">
                  <div className="flex flex-col gap-6 mt-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name="Factory" size={28} className="text-accent" />
                      <span className="text-lg font-bold">МеталлПром</span>
                    </div>
                    {menuItems.map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                        className="text-left text-lg font-medium hover:text-accent transition-colors py-2"
                      >
                        {item}
                      </button>
                    ))}
                    <Button className="bg-accent hover:bg-accent/90 mt-4">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Заказать звонок
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>

      <section id="главная" className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/c7dff864-fa27-45c5-a25d-a9a5097f0f4a/files/5db7dc02-d03a-4bba-8e65-1a2797a4e93e.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Изделия из металла
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Производство доборных элементов кровли, колпаков, отливов и парапетов
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => scrollToSection('калькулятор')}>
              <Icon name="Calculator" className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white" onClick={() => scrollToSection('продукция')}>
              Наша продукция
            </Button>
          </div>
        </div>
      </section>

      <section id="продукция" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наша продукция</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Высокое качество металлоизделий для любых строительных задач
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={product.icon as any} size={24} className="text-accent" />
                  </div>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    от {product.basePrice} ₽/м²
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => scrollToSection('калькулятор')}>
                    Рассчитать стоимость
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="калькулятор" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Калькулятор стоимости</h2>
            <p className="text-center text-muted-foreground mb-12">
              Рассчитайте примерную стоимость изделий
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Параметры изделия</CardTitle>
                <CardDescription>Укажите размеры и количество</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Тип изделия</Label>
                  <Select
                    value={calculatorData.productType}
                    onValueChange={(value) => setCalculatorData({...calculatorData, productType: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип изделия" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product.name} value={product.name}>
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Длина (мм)</Label>
                    <Input
                      type="number"
                      placeholder="1000"
                      value={calculatorData.length}
                      onChange={(e) => setCalculatorData({...calculatorData, length: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Ширина (мм)</Label>
                    <Input
                      type="number"
                      placeholder="500"
                      value={calculatorData.width}
                      onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Количество (шт)</Label>
                  <Input
                    type="number"
                    placeholder="10"
                    value={calculatorData.quantity}
                    onChange={(e) => setCalculatorData({...calculatorData, quantity: e.target.value})}
                  />
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90" size="lg" onClick={calculatePrice}>
                  <Icon name="Calculator" className="mr-2" />
                  Рассчитать
                </Button>

                {calculatedPrice !== null && (
                  <div className="p-6 bg-accent/10 rounded-lg border-2 border-accent animate-scale-in">
                    <p className="text-sm text-muted-foreground mb-2">Примерная стоимость:</p>
                    <p className="text-3xl font-bold text-accent">{calculatedPrice.toLocaleString()} ₽</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      * Окончательная цена определяется после уточнения деталей заказа
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Мы специализируемся на изготовлении высококачественных металлоизделий для строительства и кровельных работ.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Наше производство оснащено современным оборудованием, что позволяет выполнять заказы любой сложности в короткие сроки.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">выполненных заказов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">гарантия качества</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://cdn.poehali.dev/projects/c7dff864-fa27-45c5-a25d-a9a5097f0f4a/files/1b7c06f8-9f85-4e53-9cf9-6bfafc9682ec.jpg"
                alt="Производство"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12">
            Примеры наших выполненных проектов
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow hover-scale">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="доставка" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Доставка</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Icon name="Truck" size={40} className="text-accent mb-4" />
                  <CardTitle>По городу</CardTitle>
                  <CardDescription>Доставка в течение 1-2 дней</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-accent">от 500 ₽</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="MapPin" size={40} className="text-accent mb-4" />
                  <CardTitle>По области</CardTitle>
                  <CardDescription>Доставка в течение 3-5 дней</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-accent">от 1500 ₽</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Package" size={40} className="text-accent mb-4" />
                  <CardTitle>Самовывоз</CardTitle>
                  <CardDescription>Забрать можно в тот же день</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-accent">Бесплатно</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес производства</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@metallprom.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб: 9:00 - 15:00</p>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Оставьте заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Имя</Label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label>Телефон</Label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="space-y-2">
                    <Label>Комментарий</Label>
                    <Input placeholder="Чем мы можем помочь?" />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Factory" size={28} />
                <span className="text-xl font-bold">МеталлПром</span>
              </div>
              <p className="text-sm opacity-80">
                Производство изделий из металла высокого качества с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Доборные элементы</li>
                <li>Колпаки на трубы</li>
                <li>Колпаки на забор</li>
                <li>Отливы</li>
                <li>Парапеты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Доставка</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@metallprom.ru</li>
                <li>Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
            © 2024 МеталлПром. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;