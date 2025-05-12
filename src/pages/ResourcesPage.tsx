
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/ui/PageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResourcesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <PageTitle 
          title="Ресурсы" 
          subtitle="Полезные материалы и ссылки для глубокого понимания проекта"
        />

        <section className="mb-12">
          <Tabs defaultValue="partners">
            <TabsList className="mb-8">
              <TabsTrigger value="partners">Партнеры</TabsTrigger>
              <TabsTrigger value="documentation">Документация</TabsTrigger>
              <TabsTrigger value="libraries">Библиотеки</TabsTrigger>
              <TabsTrigger value="learning">Обучение</TabsTrigger>
            </TabsList>
            
            <TabsContent value="partners">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PartnerCard 
                  name="Университет"
                  description="Официальный сайт нашего университета с информацией о программах обучения, событиях и контактных данных."
                  logo="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  url="https://example.university.edu"
                />
                
                <PartnerCard 
                  name="IT-отдел университета"
                  description="Ресурсы и поддержка от IT-отдела университета, включая доступ к API и документации внутренних систем."
                  logo="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  url="https://it.example.university.edu"
                />
                
                <PartnerCard 
                  name="Студенческий совет"
                  description="Организация, представляющая интересы студентов и помогающая в тестировании и сборе обратной связи."
                  logo="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  url="https://students.example.university.edu"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="documentation">
              <div className="space-y-6">
                <ResourceSection title="Техническая документация">
                  <DocumentCard 
                    title="Техническое задание"
                    description="Полное описание требований, функциональности и ограничений проекта."
                    type="PDF"
                    size="2.4 MB"
                    date="15.09.2024"
                    url="#"
                  />
                  
                  <DocumentCard 
                    title="Руководство по API"
                    description="Документация по API университетских систем и их интеграции."
                    type="HTML"
                    size="Онлайн"
                    date="20.09.2024"
                    url="#"
                  />
                  
                  <DocumentCard 
                    title="Архитектура приложения"
                    description="Описание архитектуры приложения, компонентов и их взаимодействия."
                    type="PDF"
                    size="3.1 MB"
                    date="05.10.2024"
                    url="#"
                  />
                </ResourceSection>
                
                <ResourceSection title="UI/UX документация">
                  <DocumentCard 
                    title="Дизайн-система"
                    description="Описание компонентов, цветовых схем и типографики приложения."
                    type="Figma"
                    size="Онлайн"
                    date="12.10.2024"
                    url="#"
                  />
                  
                  <DocumentCard 
                    title="Руководство по стилю"
                    description="Детальное описание визуального стиля, логотипов и иконок."
                    type="PDF"
                    size="5.2 MB"
                    date="15.10.2024"
                    url="#"
                  />
                </ResourceSection>
                
                <ResourceSection title="Отчеты">
                  <DocumentCard 
                    title="Отчет о тестировании прототипа"
                    description="Результаты первичного тестирования прототипа с пользователями."
                    type="PPTX"
                    size="4.7 MB"
                    date="20.10.2024"
                    url="#"
                  />
                  
                  <DocumentCard 
                    title="Ежемесячный отчет (Октябрь)"
                    description="Обзор прогресса, достижений и проблем за октябрь 2024."
                    type="PDF"
                    size="1.8 MB"
                    date="31.10.2024"
                    url="#"
                  />
                </ResourceSection>
              </div>
            </TabsContent>
            
            <TabsContent value="libraries">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 font-montserrat text-[#1A1F2C]">
                    iOS и Swift библиотеки
                  </h3>
                  <div className="space-y-4">
                    <LibraryCard 
                      name="Alamofire"
                      description="Элегантный и понятный интерфейс для HTTP-запросов в Swift."
                      github="https://github.com/Alamofire/Alamofire"
                      stars={38400}
                    />
                    
                    <LibraryCard 
                      name="SwiftyJSON"
                      description="Работа с JSON-данными в Swift стала проще и удобнее."
                      github="https://github.com/SwiftyJSON/SwiftyJSON"
                      stars={21200}
                    />
                    
                    <LibraryCard 
                      name="Kingfisher"
                      description="Мощная библиотека для загрузки и кэширования изображений."
                      github="https://github.com/onevcat/Kingfisher"
                      stars={20100}
                    />
                    
                    <LibraryCard 
                      name="SnapKit"
                      description="DSL для создания Auto Layout-ограничений в коде."
                      github="https://github.com/SnapKit/SnapKit"
                      stars={18700}
                    />
                    
                    <LibraryCard 
                      name="IQKeyboardManager"
                      description="Автоматическое решение проблем с клавиатурой iOS."
                      github="https://github.com/hackiftekhar/IQKeyboardManager"
                      stars={15800}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 font-montserrat text-[#1A1F2C]">
                    Backend библиотеки
                  </h3>
                  <div className="space-y-4">
                    <LibraryCard 
                      name="Express"
                      description="Быстрый, минималистичный фреймворк для Node.js."
                      github="https://github.com/expressjs/express"
                      stars={59700}
                    />
                    
                    <LibraryCard 
                      name="Mongoose"
                      description="MongoDB-объектное моделирование для Node.js."
                      github="https://github.com/Automattic/mongoose"
                      stars={25300}
                    />
                    
                    <LibraryCard 
                      name="JsonWebToken"
                      description="Реализация JWT-токенов для Node.js."
                      github="https://github.com/auth0/node-jsonwebtoken"
                      stars={18900}
                    />
                    
                    <LibraryCard 
                      name="Socket.io"
                      description="Библиотека для создания реальных двусторонних соединений."
                      github="https://github.com/socketio/socket.io"
                      stars={56800}
                    />
                    
                    <LibraryCard 
                      name="Nodemailer"
                      description="Отправка электронной почты из приложений Node.js."
                      github="https://github.com/nodemailer/nodemailer"
                      stars={15200}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="learning">
              <div className="space-y-8">
                <ResourceSection title="Учебные курсы">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CourseCard 
                      title="iOS & Swift - The Complete iOS App Development Bootcamp"
                      provider="Udemy"
                      instructor="Dr. Angela Yu"
                      level="Начальный - Продвинутый"
                      duration="60 часов"
                      url="https://www.udemy.com/course/ios-13-app-development-bootcamp/"
                    />
                    
                    <CourseCard 
                      title="SwiftUI Masterclass 2024"
                      provider="Udemy"
                      instructor="Robert Petras"
                      level="Средний - Продвинутый"
                      duration="45 часов"
                      url="https://www.udemy.com/course/swiftui-masterclass-course-ios-development-with-swift/"
                    />
                    
                    <CourseCard 
                      title="iOS от кибер.Университета"
                      provider="КиберУниверситет"
                      instructor="Команда преподавателей"
                      level="Начальный - Средний"
                      duration="80 часов"
                      url="#"
                    />
                  </div>
                </ResourceSection>
                
                <ResourceSection title="Статьи и руководства">
                  <div className="space-y-4">
                    <ArticleCard 
                      title="Рекомендации Apple по дизайну и пользовательскому интерфейсу"
                      source="Apple Developer"
                      date="Постоянно обновляется"
                      url="https://developer.apple.com/design/human-interface-guidelines/"
                      description="Официальные рекомендации Apple по разработке интуитивных и привлекательных интерфейсов для iOS."
                    />
                    
                    <ArticleCard 
                      title="Работа с Core Data в SwiftUI"
                      source="Hacking with Swift"
                      date="10.09.2024"
                      url="https://www.hackingwithswift.com/quick-start/swiftui/introduction-to-using-core-data-with-swiftui"
                      description="Подробное руководство по интеграции Core Data с приложениями SwiftUI для локального хранения данных."
                    />
                    
                    <ArticleCard 
                      title="Безопасная аутентификация в iOS-приложениях"
                      source="Medium"
                      date="05.10.2024"
                      url="https://medium.com/example/secure-authentication-in-ios-apps"
                      description="Лучшие практики и методы для реализации безопасной аутентификации в iOS-приложениях."
                    />
                    
                    <ArticleCard 
                      title="Оптимизация производительности SwiftUI"
                      source="SwiftUI Lab"
                      date="15.10.2024"
                      url="https://swiftui-lab.com/performance-optimization"
                      description="Техники и методы оптимизации производительности приложений, написанных с использованием SwiftUI."
                    />
                  </div>
                </ResourceSection>
                
                <ResourceSection title="Видеоматериалы">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <VideoCard 
                      title="WWDC 2024: Новые возможности SwiftUI"
                      channel="Apple Developer"
                      duration="45:18"
                      date="12.06.2024"
                      url="https://developer.apple.com/videos/"
                      thumbnail="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    />
                    
                    <VideoCard 
                      title="Создание красивых анимаций в SwiftUI"
                      channel="SwiftUI Masterclass"
                      duration="32:45"
                      date="25.09.2024"
                      url="#"
                      thumbnail="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    />
                    
                    <VideoCard 
                      title="Интеграция с университетскими API"
                      channel="Наш проект"
                      duration="28:12"
                      date="10.10.2024"
                      url="#"
                      thumbnail="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    />
                    
                    <VideoCard 
                      title="Тестирование iOS-приложений: лучшие практики"
                      channel="iOS Dev"
                      duration="37:29"
                      date="05.10.2024"
                      url="#"
                      thumbnail="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    />
                  </div>
                </ResourceSection>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        <section>
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 font-montserrat text-[#1A1F2C]">
                    Нужны дополнительные ресурсы?
                  </h2>
                  <p className="text-gray-600 font-roboto mb-6">
                    Если вы не нашли необходимую информацию или у вас есть предложения по добавлению новых ресурсов, пожалуйста, свяжитесь с нами. Мы постоянно обновляем эту страницу, добавляя полезные материалы для лучшего понимания проекта.
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8A76E5] hover:to-[#6E59A5] text-white font-medium px-6 py-2 h-12"
                  >
                    Связаться с нами
                  </Button>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-[#9b87f5]/10 p-8 rounded-full">
                    <Icon name="BookOpen" className="h-16 w-16 text-[#9b87f5]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

interface PartnerCardProps {
  name: string;
  description: string;
  logo: string;
  url: string;
}

const PartnerCard = ({ name, description, logo, url }: PartnerCardProps) => {
  return (
    <Card className="border-gray-200 hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
            <img 
              src={logo} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-center mb-2 font-montserrat text-[#1A1F2C]">{name}</h3>
        </div>
        <p className="text-gray-600 font-roboto text-center mb-6">{description}</p>
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              Посетить сайт
              <Icon name="ExternalLink" className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface ResourceSectionProps {
  title: string;
  children: React.ReactNode;
}

const ResourceSection = ({ title, children }: ResourceSectionProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 font-montserrat text-[#1A1F2C]">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

interface DocumentCardProps {
  title: string;
  description: string;
  type: string;
  size: string;
  date: string;
  url: string;
}

const DocumentCard = ({ title, description, type, size, date, url }: DocumentCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'FileText';
      case 'PPTX':
        return 'PresentationChart';
      case 'HTML':
        return 'Globe';
      case 'Figma':
        return 'Figma';
      default:
        return 'File';
    }
  };
  
  return (
    <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-[#9b87f5]/10 rounded-md flex items-center justify-center shrink-0">
            <Icon name={getIcon(type)} className="h-6 w-6 text-[#9b87f5]" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium mb-1 text-[#1A1F2C]">{title}</h4>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Icon name="FileType" className="h-3.5 w-3.5" />
                {type}
              </div>
              <div className="flex items-center gap-1">
                <Icon name="HardDrive" className="h-3.5 w-3.5" />
                {size}
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Calendar" className="h-3.5 w-3.5" />
                {date}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-[#9b87f5] hover:bg-[#9b87f5]/10"
              asChild
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Icon name="Download" className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface LibraryCardProps {
  name: string;
  description: string;
  github: string;
  stars: number;
}

const LibraryCard = ({ name, description, github, stars }: LibraryCardProps) => {
  const formattedStars = stars.toLocaleString();
  
  return (
    <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between mb-2">
          <h4 className="font-bold text-[#1A1F2C]">{name}</h4>
          <div className="flex items-center gap-1">
            <Icon name="Star" className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-gray-600">{formattedStars}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex justify-end">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-[#9b87f5] hover:bg-[#9b87f5]/10 h-8 px-3"
            asChild
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Icon name="Github" className="mr-1 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface CourseCardProps {
  title: string;
  provider: string;
  instructor: string;
  level: string;
  duration: string;
  url: string;
}

const CourseCard = ({ title, provider, instructor, level, duration, url }: CourseCardProps) => {
  return (
    <Card className="border-gray-200 hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6">
        <div className="mb-4">
          <span className="inline-block px-2 py-1 bg-[#9b87f5]/10 text-[#9b87f5] text-xs rounded mb-2">
            {provider}
          </span>
          <h3 className="font-bold mb-2 text-[#1A1F2C]">{title}</h3>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Icon name="User" className="h-4 w-4 text-gray-400" />
            {instructor}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Icon name="BarChart" className="h-4 w-4 text-gray-400" />
            {level}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Icon name="Clock" className="h-4 w-4 text-gray-400" />
            {duration}
          </div>
        </div>
        <Button 
          variant="outline" 
          className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
          asChild
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            Перейти к курсу
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

interface ArticleCardProps {
  title: string;
  source: string;
  date: string;
  url: string;
  description: string;
}

const ArticleCard = ({ title, source, date, url, description }: ArticleCardProps) => {
  return (
    <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <h4 className="font-medium mb-1 text-[#1A1F2C]">{title}</h4>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
          <div className="flex items-center gap-1">
            <Icon name="BookOpen" className="h-3.5 w-3.5" />
            {source}
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Calendar" className="h-3.5 w-3.5" />
            {date}
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex justify-end">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-[#9b87f5] hover:bg-[#9b87f5]/10 h-8 px-3"
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              Читать статью
              <Icon name="ExternalLink" className="ml-1 h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface VideoCardProps {
  title: string;
  channel: string;
  duration: string;
  date: string;
  url: string;
  thumbnail: string;
}

const VideoCard = ({ title, channel, duration, date, url, thumbnail }: VideoCardProps) => {
  return (
    <Card className="border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        </div>
        <div className="p-4">
          <h4 className="font-medium mb-1 text-[#1A1F2C]">{title}</h4>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <span>{channel}</span>
            <span>{date}</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Icon name="Play" className="mr-1 h-4 w-4" />
              Смотреть видео
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesPage;
