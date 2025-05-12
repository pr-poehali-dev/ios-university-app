
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#9b87f5]/10 to-[#D6BCFA]/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat text-[#1A1F2C]">
                Разработка iOS приложения для Университета
              </h1>
              <p className="text-lg mb-8 text-gray-600 font-roboto">
                Современное решение для студентов и преподавателей, делающее университетскую жизнь проще и эффективнее.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8A76E5] hover:to-[#6E59A5] text-white font-medium px-6 py-2 h-12"
                  asChild
                >
                  <Link to="/about">О проекте</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10 h-12 px-6"
                  asChild
                >
                  <Link to="/journal">Наш журнал</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Мобильное приложение для университета" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-montserrat text-[#1A1F2C]">
            Ключевые возможности приложения
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="Calendar" 
              title="Расписание занятий" 
              description="Доступ к расписанию с уведомлениями и синхронизацией с календарем телефона." 
            />
            <FeatureCard 
              icon="BookOpen" 
              title="Учебные материалы" 
              description="Удобный доступ к лекциям, презентациям и другим материалам курса." 
            />
            <FeatureCard 
              icon="MessageSquare" 
              title="Коммуникация" 
              description="Прямое общение с преподавателями и однокурсниками через встроенный чат." 
            />
          </div>
        </div>
      </section>

      {/* Project Progress */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-montserrat text-[#1A1F2C]">
            Прогресс проекта
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-[#9b87f5] transform md:translate-x-px"></div>
              
              {/* Timeline Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TimelineItem 
                  align="right"
                  date="Сентябрь 2024"
                  title="Начало проекта"
                  description="Формирование команды и выбор технологий для разработки."
                />
                <TimelineItem 
                  align="left"
                  date="Октябрь 2024"
                  title="Дизайн интерфейса"
                  description="Создание прототипа и утверждение основных экранов приложения."
                />
                <TimelineItem 
                  align="right"
                  date="Ноябрь 2024"
                  title="Разработка бэкенда"
                  description="Построение API и подключение к университетским системам."
                />
                <TimelineItem 
                  align="left"
                  date="Декабрь 2024"
                  title="Тестирование"
                  description="Закрытое бета-тестирование с ограниченной группой студентов."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white font-montserrat">
            Следите за нашим прогрессом
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 font-roboto">
            Присоединяйтесь к команде разработчиков или следите за обновлениями проекта в нашем журнале.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 h-12 px-6"
              asChild
            >
              <Link to="/team">Наша команда</Link>
            </Button>
            <Button 
              className="bg-white text-[#9b87f5] hover:bg-white/90 h-12 px-6"
              asChild
            >
              <Link to="/journal">Журнал проекта</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow bg-white">
      <div className="w-12 h-12 bg-[#9b87f5]/10 rounded-lg flex items-center justify-center mb-4">
        <Icon name={icon} className="h-6 w-6 text-[#9b87f5]" />
      </div>
      <h3 className="text-xl font-bold mb-2 font-montserrat text-[#1A1F2C]">{title}</h3>
      <p className="text-gray-600 font-roboto">{description}</p>
    </div>
  );
};

interface TimelineItemProps {
  align: 'left' | 'right';
  date: string;
  title: string;
  description: string;
}

const TimelineItem = ({ align, date, title, description }: TimelineItemProps) => {
  return (
    <div className={`relative ${align === 'left' ? 'md:col-start-2' : 'md:col-start-1'} bg-white p-6 rounded-lg shadow-sm border border-gray-100`}>
      {/* Dot on timeline */}
      <div className={`absolute top-6 ${
        align === 'left' ? 'left-0 -translate-x-1/2 md:left-0 md:-translate-x-1/2' : 'left-0 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2'
      } w-4 h-4 bg-white border-2 border-[#9b87f5] rounded-full`}></div>
      
      <span className="inline-block mb-2 text-sm font-medium text-[#9b87f5] font-roboto">{date}</span>
      <h3 className="text-xl font-bold mb-2 font-montserrat text-[#1A1F2C]">{title}</h3>
      <p className="text-gray-600 font-roboto">{description}</p>
    </div>
  );
};

export default HomePage;
