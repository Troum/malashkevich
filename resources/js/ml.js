import Vue from 'vue';
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
Vue.use(MLInstaller);

export default new MLCreate({
    initial: 'RU',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('EN').create({
            menu: [
                {
                    link: '/about',
                    title: 'About'
                },
                {
                    link: '/schedule',
                    title: 'Schedule'
                },
                {
                    link: '/gallery',
                    title: 'Gallery'
                },
                {
                    link: '/feedback',
                    title: 'Feedback'
                }
            ],
            feedbackForm: {
                feedbackHeading: "Write to me",
                placeholderName: "Write your name right here",
                placeholderEmail: "Write your e-mail address here",
                placeholderMessage: "And don't forget about message",
                submitButton: "Send"
            },
            about: {
                title: "About",
                content: ""
            },
            rights: {
                text: "All Rights Reserved &copy; " + new Date().toLocaleDateString('ru', {year: 'numeric'})
            },
            registerForm: {
                header: "Register form",
                subHeader: "Please, fill the form below",
                name: "Type your name",
                login: "Type your login (please, use your valid e-mail address)",
                password: "Type your password here",
                passwordConfirm: "Please, confirm your password",
                submit: "Register"
            },
            loginForm: {
                header: "Login",
                subHeader: "Please, fill fields below",
                login: "Your login",
                password: "Your password",
                submit: "Login"
            },
            errors: {
                401: 'You are unauthorized',
                500: 'Server error'

            },
            dashboardMenu: {
                login: 'Login',
                register: 'Sign Up',
                logout: 'Logout'
            },
            dashboardNav: {
                photos: {
                    title: 'Photos',
                    all: 'Show all',
                    add: 'Add more'
                },
                about: {
                    title: 'About',
                    add: 'Add about info',
                    edit: 'Edit about info',
                }
            },
            create: {
                title: 'Choose or drag your photos',
                placeholder: 'Choose your photos...',
                drag: 'Drag your photos here...',
                browse: 'Browse',
                submit: 'Upload'
            }
        }),

        new MLanguage('RU').create({
            menu: [
                {
                    link: '/about',
                    title: 'Обо мне'
                },
                {
                    link: '/schedule',
                    title: 'Расписание'
                },
                {
                    link: '/gallery',
                    title: 'Галерея'
                },
                {
                    link: '/feedback',
                    title: 'Написать мне'
                }
            ],
            feedbackForm: {
                feedbackHeading: "Написать мне",
                placeholderName: "Впиши сюда свое имя",
                placeholderEmail: "Сюда впиши свой e-mail",
                placeholderMessage: "И не забудь о сообщении",
                submitButton: "Отправить"
            },
            about: {
                title: "Обо мне",
                content: ""
            },
            rights: {
                text: "Все права защищены &copy; " + new Date().toLocaleDateString('ru', {year: 'numeric'})
            },
            registerForm: {
                header: "Регистрация",
                subHeader: "Пожалуйста, заполните форму ниже",
                name: "Как Вас зовут?",
                login: "Впишите сюда свой логин (пожалуйста, используйте в качестве логина валидный e-mail)",
                password: "Впишитие сюда придуманный Вами пароль",
                passwordConfirm: "Подтвердите Ваш пароль",
                submit: "Зарегистрироваться"
            },
            loginForm: {
                header: "Войти",
                subHeader: "Пожалуйста, заполните поля ниже",
                login: "Ваш логин",
                password: "Ваш пароль",
                submit: "Войти"
            },
            errors: {
                401: 'Вы неавторизованы',
                500: 'Ошибка сервера'

            },
            dashboardMenu: {
                login: 'Войти',
                register: 'Зарегистрироваться',
                logout: 'Выйти'
            },
            dashboardNav: {
                photos: {
                    title: 'Фото',
                    all: 'Показать все фото',
                    add: 'Добавить фото'
                },
                about: {
                    title: 'Обо мне',
                    add: 'Добавить информацию обо мне',
                    edit: 'Редактировать информацию обо мне',
                }
            },
            create: {
                title: 'Добавьте или перетащите фотографии',
                placeholder: 'Выберите фотографии...',
                drag: 'Перетащите фотографии сюда...',
                browse: 'Обзор',
                submit: 'Загрузить'
            }
        })
    ]
})
