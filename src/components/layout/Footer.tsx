
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1F2C] text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] p-2 rounded-md">
                <Icon name="AppWindow" className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold font-montserrat">UniApp iOS</span>
            </div>
            <p className="text-gray-300 font-roboto mb-4">
              Инновационное мобильное приложение для университета, которое делает жизнь студентов и преподавателей проще.
            </p>
            <div className="flex gap-4">
              <SocialIcon name="Github" />
              <SocialIcon name="Instagram" />
              <SocialIcon name="Twitter" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-montserrat">Карта сайта</h3>
            <ul className="space-y-2 font-roboto">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">
                  Участники
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-gray-300 hover:text-white transition-colors">
                  Журнал
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Ресурсы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-montserrat">Контакты</h3>
            <div className="space-y-3 font-roboto">
              <div className="flex items-start gap-2">
                <Icon name="Mail" className="h-5 w-5 mt-0.5 text-[#9b87f5]" />
                <span className="text-gray-300">uniapp@university.edu</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Phone" className="h-5 w-5 mt-0.5 text-[#9b87f5]" />
                <span className="text-gray-300">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="MapPin" className="h-5 w-5 mt-0.5 text-[#9b87f5]" />
                <span className="text-gray-300">г. Москва, ул. Университетская, 1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 font-roboto">
          <p>© {currentYear} UniApp iOS. Все права защищены.</p>
          <p className="mt-2 text-sm">Проект по курсу "Проектная деятельность"</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ name }: { name: string }) => {
  return (
    <a 
      href="#" 
      className="bg-gray-700 p-2 rounded-full hover:bg-[#9b87f5] transition-colors"
      aria-label={name}
    >
      <Icon name={name} className="h-5 w-5 text-white" />
    </a>
  );
};

export default Footer;
