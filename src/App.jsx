import React, { useState, useEffect } from 'react';
import {
  Clock,
  Shield,
  Headphones,
  TrendingUp,
  Star,
  ArrowRight,
  Download,
  FileText,
  CheckCircle,
  Calculator,
  Phone,
  Mail,
  MapPin,
  Users,
  Building2
} from 'lucide-react';

/**
 * Главный компонент приложения НОСО
 * Реализует одностраничное приложение для вступления в СРО
 */
function App() {
  // Состояние для выбранного уровня ответственности
  const [selectedLevel, setSelectedLevel] = useState("90");

  // Состояние для управления анимацией появления
  const [isVisible, setIsVisible] = useState(false);

  // Состояние формы заявки
  const [formData, setFormData] = useState({
    inn: "",
    name: "",
    phone: "",
    email: ""
  });

  // Эффект для плавного появления контента при загрузке
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Данные преимуществ НОСО
  const advantages = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Регистрация за 1-2 дня",
      description: "Быстрое оформление документов без бюрократических задержек"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Прозрачные платежи",
      description: "Никаких скрытых комиссий и дополнительных сборов"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Поддержка 24/7",
      description: "Помощь при подготовке документов на всех этапах"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Доступ к тендерам",
      description: "Участие в госзакупках от 3 млн ₽"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Экономия до 50%",
      description: "Минимальные компенсационные взносы в регионе"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "15+ лет опыта",
      description: "Проверенная репутация и надежность"
    }
  ];

  // Данные уровней ответственности для калькулятора
  const membershipLevels = {
    90: {
      membership: 4400,        // Членский взнос в рублях
      compensation: 100000,    // Компенсационный фонд
      description: "до 90 млн ₽"
    },
    500: {
      membership: 5500,
      compensation: 500000,
      description: "до 500 млн ₽"
    },
    "3e3": {
      membership: 7500,
      compensation: 3000000,
      description: "до 3 млрд ₽"
    },
    unlimited: {
      membership: 10000,
      compensation: 10000000,
      description: "без ограничений"
    }
  };

  // Этапы процесса вступления
  const processSteps = [
    {
      step: 1,
      title: "Подача заявки",
      description: "Заполните форму на сайте или позвоните нам",
      duration: "1 день"
    },
    {
      step: 2,
      title: "Подготовка документов",
      description: "Наши специалисты помогут собрать пакет документов",
      duration: "1 день"
    },
    {
      step: 3,
      title: "Оплата взносов",
      description: "Удобная онлайн оплата без комиссий",
      duration: "Мгновенно"
    },
    {
      step: 4,
      title: "Получение свидетельства",
      description: "Выдача документов о членстве в СРО",
      duration: "1 день"
    }
  ];

  // Список необходимых документов
  const requiredDocuments = [
    "Учредительные документы организации",
    "Справка о материально-технической базе",
    "Страховой полис ответственности",
    "Документы о квалификации специалистов",
    "Справка об отсутствии задолженности"
  ];

  /**
   * Обработчик изменения полей формы
   * @param {Event} e - Событие изменения input
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Обработчик отправки формы заявки
   * @param {Event} e - Событие отправки формы
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Заявка отправлена! Мы свяжемся с вами в течение часа.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Шапка сайта с логотипом и контактами */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Логотип и название организации */}
            <div className={`flex items-center space-x-4 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">НОСО</h1>
                <p className="text-sm text-gray-600">СРО-С-059-05112009</p>
              </div>
            </div>

            {/* Контактная информация и кнопка заявки */}
            <div className={`flex items-center space-x-6 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
              {/* Контакты для больших экранов */}
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>+7 (831) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>info@noso.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>ул. Большая Покровская, д.15, оф.7</span>
                </div>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Вступить в НОСО
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Главная секция с заголовком и калькулятором */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Основной контент */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Станьте членом{" "}
                <span className="text-blue-600">крупнейшего СРО</span>{" "}
                Нижнего Новгорода за 1-2 дня
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Получите допуск СРО с минимальными документами и прозрачными платежами.
                Более 500 участников доверяют нам.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                  Подать заявку
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  Консультация
                </button>
              </div>
            </div>

            {/* Калькулятор взносов */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <Calculator className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Калькулятор взносов</h3>
                </div>

                {/* Выбор уровня ответственности */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Максимальная сумма одного договора
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(membershipLevels).map(([level, data]) => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                          selectedLevel === level
                            ? "border-blue-600 bg-blue-50 text-blue-600"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="text-sm font-semibold">{data.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Отображение рассчитанных сумм */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Членский взнос (мес.)</span>
                    <span className="text-2xl font-bold text-green-600">
                      {membershipLevels[selectedLevel].membership.toLocaleString()} ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Компенсационный фонд</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {membershipLevels[selectedLevel].compensation.toLocaleString()} ₽
                    </span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Рассчитать полную стоимость
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Почему выбирают НОСО</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы обеспечиваем быстрое и надежное вступление в СРО с минимальными затратами времени и средств
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-blue-600 mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Секция процесса вступления */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Процесс вступления</h2>
            <p className="text-xl text-gray-600">Всего 4 простых шага до получения свидетельства СРО</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                    {step.duration}
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Секция документов */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Необходимые документы */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Необходимые документы</h2>
              <p className="text-xl text-gray-600 mb-8">
                Наши специалисты помогут подготовить полный пакет документов для быстрого вступления в СРО
              </p>
              <div className="space-y-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Скачать чек-лист документов
              </button>
            </div>

            {/* Шаблоны документов */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Шаблоны документов</h3>
                <p className="text-gray-600">Скачайте готовые шаблоны для быстрого заполнения</p>
              </div>

              <div className="space-y-4">
                {[
                  "Заявление о вступлении",
                  "Справка о МТБ",
                  "Реестр специалистов"
                ].map((template, index) => (
                  <button
                    key={index}
                    className="w-full bg-white hover:bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-700">{template}</span>
                    <Download className="w-5 h-5 text-blue-600" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция формы заявки */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Подайте заявку прямо сейчас</h2>
              <p className="text-xl text-blue-100">
                Заполните форму, и наш специалист свяжется с вами в течение часа
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Форма заявки */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">ИНН организации</label>
                    <input
                      type="text"
                      name="inn"
                      value={formData.inn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="1234567890"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Контактное лицо</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="info@company.ru"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>

              {/* Контактная информация */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-blue-200" />
                      <div>
                        <p className="font-semibold">+7 (831) 123-45-67</p>
                        <p className="text-blue-200 text-sm">Звонки принимаются 24/7</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-blue-200" />
                      <div>
                        <p className="font-semibold">info@noso.ru</p>
                        <p className="text-blue-200 text-sm">Ответим в течение часа</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-blue-200" />
                      <div>
                        <p className="font-semibold">ул. Большая Покровская, д.15, оф.7</p>
                        <p className="text-blue-200 text-sm">Нижний Новгород, 603001</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-blue-200 mr-3" />
                    <h4 className="text-xl font-bold">Более 500 участников</h4>
                  </div>
                  <p className="text-blue-100">
                    Крупнейшее СРО в Нижегородской области с 15-летним опытом работы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал сайта */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Информация об организации */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">НОСО</h3>
                  <p className="text-gray-400 text-sm">СРО-С-059-05112009</p>
                </div>
              </div>
              <p className="text-gray-400">
                Ассоциация «Нижегородское объединение строительных организаций» — надежный партнер
                для вашего бизнеса в сфере строительства.
              </p>
            </div>

            {/* Услуги */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Вступление в СРО</li>
                <li>Консультации по документам</li>
                <li>Поддержка участников</li>
                <li>Контроль качества</li>
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (831) 123-45-67</p>
                <p>info@noso.ru</p>
                <p>ул. Большая Покровская, д.15, оф.7</p>
                <p>Нижний Новгород, 603001</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
            <p>© 2024 НОСО. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
