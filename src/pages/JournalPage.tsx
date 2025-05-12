
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/ui/PageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const JournalPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <PageTitle 
          title="Журнал проекта" 
          subtitle="Следите за нашим прогрессом и последними обновлениями"
        />

        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {journalPosts.map((post, index) => (
                <JournalPost key={index} post={post} />
              ))}
            </div>
            
            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-montserrat text-[#1A1F2C]">Статистика проекта</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-600">Выполнено задач</span>
                        <span className="text-sm font-medium text-[#9b87f5]">65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#9b87f5] h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-600">Разработка UI</span>
                        <span className="text-sm font-medium text-[#9b87f5]">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#9b87f5] h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-600">Backend</span>
                        <span className="text-sm font-medium text-[#9b87f5]">50%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#9b87f5] h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-600">Тестирование</span>
                        <span className="text-sm font-medium text-[#9b87f5]">35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#9b87f5] h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-montserrat text-[#1A1F2C]">Предстоящие события</h3>
                  <div className="space-y-4">
                    <UpcomingEvent 
                      date="15 ноября 2024"
                      title="Презентация прототипа"
                      description="Демонстрация первого рабочего прототипа приложения заказчику."
                    />
                    
                    <UpcomingEvent 
                      date="30 ноября 2024"
                      title="Тест-драйв интерфейса"
                      description="Тестирование пользовательского интерфейса с фокус-группой студентов."
                    />
                    
                    <UpcomingEvent 
                      date="15 декабря 2024"
                      title="Запуск бета-версии"
                      description="Запуск бета-версии приложения с ограниченным доступом."
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-montserrat text-[#1A1F2C]">Теги</h3>
                  <div className="flex flex-wrap gap-2">
                    <TagItem label="Разработка" count={12} />
                    <TagItem label="iOS" count={8} />
                    <TagItem label="UI/UX" count={7} />
                    <TagItem label="Тестирование" count={5} />
                    <TagItem label="Дизайн" count={5} />
                    <TagItem label="API" count={4} />
                    <TagItem label="Swift" count={4} />
                    <TagItem label="Backend" count={3} />
                    <TagItem label="Firebase" count={3} />
                    <TagItem label="Прототип" count={2} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

interface JournalPostType {
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    position: string;
  };
  image?: string;
  content: string;
  tags: string[];
}

const journalPosts: JournalPostType[] = [
  {
    title: "Начало разработки iOS приложения для университета",
    date: "15 сентября 2024",
    author: {
      name: "Александр Петров",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      position: "Руководитель проекта"
    },
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    content: `
      Сегодня мы официально запустили проект по разработке iOS-приложения для нашего университета. После нескольких месяцев планирования и подготовки документации, мы наконец-то приступили к практической реализации.
      
      За последние недели мы:
      
      - Сформировали команду из 6 студентов и 2 наставников
      - Утвердили техническое задание и функциональные требования
      - Определили стек технологий и архитектуру приложения
      - Составили план разработки на ближайшие 3 месяца
      
      Основные вызовы, с которыми нам предстоит столкнуться, включают интеграцию с существующими университетскими системами и разработку интуитивно понятного интерфейса, который понравится как студентам, так и преподавателям.
      
      Наша команда полна энтузиазма и готова к работе. Мы будем регулярно обновлять этот журнал, чтобы вы могли следить за нашим прогрессом.
    `,
    tags: ["Начало проекта", "Планирование", "iOS", "Команда"]
  },
  {
    title: "Разработка прототипа пользовательского интерфейса",
    date: "10 октября 2024",
    author: {
      name: "Екатерина Иванова",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      position: "UI/UX Дизайнер"
    },
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    content: `
      В течение последних трех недель наша команда активно работала над созданием прототипа пользовательского интерфейса приложения. После нескольких итераций и обсуждений мы разработали дизайн, который, по нашему мнению, будет удобен как для студентов, так и для преподавателей.
      
      Основные особенности нашего UI:
      
      - Минималистичный дизайн с акцентом на удобство использования
      - Адаптивные элементы, оптимизированные для различных устройств iOS
      - Интуитивная навигация с быстрым доступом к часто используемым функциям
      - Темная и светлая темы для комфортного использования в любых условиях
      
      Мы провели предварительное тестирование прототипа с небольшой группой студентов и получили ценные отзывы, которые помогут нам улучшить дизайн перед началом полноценной разработки.
      
      В следующем этапе мы сосредоточимся на детализации отдельных экранов и создании анимаций для улучшения пользовательского опыта.
    `,
    tags: ["UI/UX", "Дизайн", "Прототип", "Тестирование"]
  },
  {
    title: "Разработка архитектуры и начало программирования",
    date: "5 ноября 2024",
    author: {
      name: "Михаил Сидоров",
      avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      position: "iOS Разработчик"
    },
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    content: `
      Сегодня мы завершили важный этап в разработке нашего приложения — проектирование архитектуры и начало программирования. После тщательного анализа требований и прототипов интерфейса, мы выбрали архитектурный паттерн MVVM (Model-View-ViewModel) как основу для нашего приложения.
      
      Ключевые решения в архитектуре:
      
      - Использование SwiftUI для создания пользовательского интерфейса
      - Реализация слоя сетевого взаимодействия с использованием Combine
      - Внедрение Core Data для локального хранения данных
      - Применение принципов чистой архитектуры для обеспечения тестируемости кода
      
      Мы уже реализовали несколько базовых экранов приложения, включая экран входа, регистрации и главный экран с навигацией. Параллельно с этим, наша backend-команда работает над API, который обеспечит взаимодействие с университетскими системами.
      
      В следующие две недели мы планируем завершить разработку основных экранов и начать интеграцию с backend-частью проекта.
    `,
    tags: ["Разработка", "Swift", "SwiftUI", "Архитектура", "MVVM"]
  }
];

const JournalPost = ({ post }: { post: JournalPostType }) => {
  return (
    <Card className="mb-8 border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        {post.image && (
          <div className="relative h-64 w-full">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-[#1A1F2C]">{post.author.name}</div>
              <div className="text-sm text-gray-500">{post.author.position}</div>
            </div>
            <div className="ml-auto text-sm text-gray-500">{post.date}</div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 font-montserrat text-[#1A1F2C]">{post.title}</h2>
          
          <div className="text-gray-600 font-roboto whitespace-pre-line mb-4">
            {post.content.length > 300 
              ? `${post.content.substring(0, 300)}...` 
              : post.content
            }
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="bg-[#9b87f5]/10 text-[#9b87f5] text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <Button variant="outline" className="text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5]/10">
              Читать полностью
            </Button>
            
            <div className="flex gap-4">
              <button className="text-gray-500 hover:text-[#9b87f5] transition-colors flex items-center gap-1">
                <Icon name="ThumbsUp" className="h-4 w-4" />
                <span className="text-sm">15</span>
              </button>
              <button className="text-gray-500 hover:text-[#9b87f5] transition-colors flex items-center gap-1">
                <Icon name="MessageCircle" className="h-4 w-4" />
                <span className="text-sm">3</span>
              </button>
              <button className="text-gray-500 hover:text-[#9b87f5] transition-colors flex items-center gap-1">
                <Icon name="Share2" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface UpcomingEventProps {
  date: string;
  title: string;
  description: string;
}

const UpcomingEvent = ({ date, title, description }: UpcomingEventProps) => {
  return (
    <div className="flex gap-4 items-start p-3 hover:bg-gray-50 rounded-md transition-colors">
      <div className="w-12 h-12 bg-[#9b87f5]/10 rounded-md flex flex-col items-center justify-center text-[#9b87f5] shrink-0">
        <Icon name="Calendar" className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm text-gray-500 mb-1">{date}</div>
        <h4 className="font-medium text-[#1A1F2C] mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface TagItemProps {
  label: string;
  count: number;
}

const TagItem = ({ label, count }: TagItemProps) => {
  return (
    <Link to="#" className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-[#9b87f5]/10 transition-colors text-sm text-gray-700 hover:text-[#9b87f5]">
      {label}
      <span className="text-xs text-gray-500">({count})</span>
    </Link>
  );
};

export default JournalPage;
