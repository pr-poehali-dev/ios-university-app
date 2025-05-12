
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/ui/PageTitle";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <PageTitle 
          title="О проекте" 
          subtitle="Разработка iOS приложения для улучшения университетской экосистемы"
        />

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-[#1A1F2C]">
                Цель проекта
              </h2>
              <p className="text-gray-600 font-roboto mb-4">
                Мобильное приложение UniApp создаётся для оптимизации учебного процесса и улучшения взаимодействия между студентами и преподавателями университета. Проект направлен на создание единой цифровой экосистемы, которая объединит все аспекты университетской жизни.
              </p>
              <p className="text-gray-600 font-roboto mb-4">
                Наша команда стремится сделать университетскую среду более современной и технологичной, предоставляя удобные инструменты для обучения, коммуникации и организации учебного процесса.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Команда проекта" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-montserrat text-[#1A1F2C]">
            Основные задачи проекта
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TaskCard 
              title="Анализ потребностей" 
              description="Исследование потребностей студентов и преподавателей для определения ключевых функций приложения."
              icon="Search"
            />
            <TaskCard 
              title="Разработка архитектуры" 
              description="Проектирование масштабируемой и безопасной архитектуры приложения с учетом интеграции с существующими системами."
              icon="Code"
            />
            <TaskCard 
              title="Создание UI/UX" 
              description="Разработка интуитивно понятного и эстетичного интерфейса в соответствии с гайдлайнами Apple."
              icon="PenTool"
            />
            <TaskCard 
              title="Разработка API" 
              description="Создание бэкенд-инфраструктуры и API для взаимодействия приложения с серверной частью."
              icon="Server"
            />
            <TaskCard 
              title="Тестирование" 
              description="Проведение функционального и нагрузочного тестирования для обеспечения качества и надежности приложения."
              icon="CheckCircle"
            />
            <TaskCard 
              title="Внедрение" 
              description="Поэтапное внедрение приложения и обучение пользователей работе с новыми инструментами."
              icon="Upload"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-montserrat text-[#1A1F2C]">
            Технологический стек
          </h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <TechItem icon="Swift" name="Swift" description="Основной язык разработки" />
              <TechItem icon="Database" name="Firebase" description="Облачная база данных" />
              <TechItem icon="Layout" name="SwiftUI" description="UI-фреймворк" />
              <TechItem icon="GitBranch" name="Git" description="Система контроля версий" />
              <TechItem icon="Cloud" name="AWS" description="Облачная инфраструктура" />
              <TechItem icon="Shield" name="Auth0" description="Аутентификация" />
              <TechItem icon="Bell" name="Push Notifications" description="Уведомления" />
              <TechItem icon="Activity" name="Analytics" description="Аналитика использования" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 font-montserrat text-[#1A1F2C]">
            Этапы разработки
          </h2>
          <div className="relative pb-12">
            <div className="absolute top-0 left-6 h-full w-0.5 bg-gray-200"></div>
            
            <StageItem 
              title="Этап 1: Планирование и исследование"
              date="Сентябрь 2024"
              status="Завершен"
              icon="CheckCircle"
              iconColor="text-green-500"
              description="Определение требований, исследование пользовательских потребностей, анализ конкурентов, разработка технического задания."
            />
            
            <StageItem 
              title="Этап 2: Проектирование и дизайн"
              date="Октябрь-Ноябрь 2024"
              status="В процессе"
              icon="Circle"
              iconColor="text-[#9b87f5]"
              description="Разработка архитектуры приложения, создание прототипов интерфейса, проектирование базы данных и API."
            />
            
            <StageItem 
              title="Этап 3: Разработка"
              date="Декабрь 2024 - Февраль 2025"
              status="Запланирован"
              icon="Circle"
              iconColor="text-gray-400"
              description="Кодирование клиентской и серверной части, интеграция с университетскими системами, создание модулей приложения."
            />
            
            <StageItem 
              title="Этап 4: Тестирование и оптимизация"
              date="Март 2025"
              status="Запланирован"
              icon="Circle"
              iconColor="text-gray-400"
              description="Функциональное и нагрузочное тестирование, исправление ошибок, оптимизация производительности."
            />
            
            <StageItem 
              title="Этап 5: Развертывание и поддержка"
              date="Апрель 2025"
              status="Запланирован"
              icon="Circle"
              iconColor="text-gray-400"
              description="Публикация в App Store, обучение пользователей, сбор обратной связи, выпуск обновлений."
              isLast={true}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

interface TaskCardProps {
  title: string;
  description: string;
  icon: string;
}

const TaskCard = ({ title, description, icon }: TaskCardProps) => {
  return (
    <Card className="border-gray-200 hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6">
        <div className="w-10 h-10 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-4">
          <Icon name={icon} className="h-5 w-5 text-[#9b87f5]" />
        </div>
        <h3 className="text-lg font-bold mb-2 font-montserrat text-[#1A1F2C]">{title}</h3>
        <p className="text-gray-600 font-roboto">{description}</p>
      </CardContent>
    </Card>
  );
};

interface TechItemProps {
  icon: string;
  name: string;
  description: string;
}

const TechItem = ({ icon, name, description }: TechItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-[#9b87f5]/10 rounded-full flex items-center justify-center">
        <Icon name={icon} className="h-5 w-5 text-[#9b87f5]" />
      </div>
      <div>
        <h4 className="font-medium font-montserrat text-[#1A1F2C]">{name}</h4>
        <p className="text-sm text-gray-500 font-roboto">{description}</p>
      </div>
    </div>
  );
};

interface StageItemProps {
  title: string;
  date: string;
  status: string;
  icon: string;
  iconColor: string;
  description: string;
  isLast?: boolean;
}

const StageItem = ({ title, date, status, icon, iconColor, description, isLast = false }: StageItemProps) => {
  return (
    <div className="relative pl-16 pb-8">
      <div className={`absolute top-0 left-0 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center z-10`}>
        <Icon name={icon} className={`h-6 w-6 ${iconColor}`} />
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex flex-wrap justify-between mb-2 gap-2">
          <h3 className="text-lg font-bold font-montserrat text-[#1A1F2C]">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 font-roboto">{date}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              status === 'Завершен' 
                ? 'bg-green-100 text-green-700' 
                : status === 'В процессе' 
                  ? 'bg-[#9b87f5]/20 text-[#9b87f5]' 
                  : 'bg-gray-100 text-gray-600'
            } font-medium`}>
              {status}
            </span>
          </div>
        </div>
        <p className="text-gray-600 font-roboto">{description}</p>
      </div>
    </div>
  );
};

export default AboutPage;
