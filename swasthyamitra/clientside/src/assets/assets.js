import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.png'
import doc17 from './doc17.png'
import doc18 from './doc18.png'
import doc19 from './doc19.png'
import doc20 from './doc20.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Samir Gautam',
        image: doc1,
        speciality: 'Cardiologist',
        degree: 'MD, DM',
        experience: '15 Years',
        about: 'Dr. Samir Gautam is the Director and Senior Consultant Cardiologist at Gautam Buddha Community Heart Hospital, Butwal. He is a pioneer in bringing specialized cardiac care to western Nepal, with expertise in interventional cardiology and cardiovascular disease management.',
        fees: 800,
        address: {
            line1: 'Gautam Buddha Community Heart Hospital',
            line2: 'Butwal-10, Ramnagar, Rupandehi'
        },
        hospitals: ['Gautam Buddha Community Heart Hospital']
    },
    {
        _id: 'doc2',
        name: 'Dr. Sachin Dhungel',
        image: doc2,
        speciality: 'Cardiologist',
        degree: 'DM',
        experience: '10 Years',
        about: 'Dr. Sachin Dhungel is a Consultant Cardiologist at Gautam Buddha Community Heart Hospital, Butwal. He specializes in the diagnosis and treatment of heart conditions including coronary artery disease, arrhythmias, and heart failure.',
        fees: 700,
        address: {
            line1: 'Gautam Buddha Community Heart Hospital',
            line2: 'Butwal-10, Ramnagar, Rupandehi'
        },
        hospitals: ['Gautam Buddha Community Heart Hospital']
    },
    {
        _id: 'doc3',
        name: 'Dr. Anip Joshi',
        image: doc3,
        speciality: 'General Surgeon',
        degree: 'MBBS, MS, FACS',
        experience: '18 Years',
        about: 'Dr. Anip Joshi is the Chief Consultant Surgeon and Associate Professor in the Department of Surgery at Bir Hospital (NAMS), Kathmandu. He is Chief of the General Surgery Unit and a Member Secretary of the Institutional Review Board.',
        fees: 1000,
        address: {
            line1: 'Bir Hospital (NAMS)',
            line2: 'Mahabouddha, Kathmandu'
        },
        hospitals: ['Bir Hospital']
    },
    {
        _id: 'doc4',
        name: 'Dr. Kritika Thapa',
        image: doc4,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '8 Years',
        about: 'Dr. Kritika Thapa is a dedicated Gynaecologist heading the Obstetrics & Gynaecology department at Karnali Provincial Hospital, Surkhet. She plays a key role in providing maternal care to women from remote Karnali and Sudurpaschim regions.',
        fees: 600,
        address: {
            line1: 'Karnali Provincial Hospital',
            line2: 'Birendranagar, Surkhet'
        },
        hospitals: ['Karnali Provincial Hospital']
    },
    {
        _id: 'doc5',
        name: 'Dr. Bikash Khadka',
        image: doc5,
        speciality: 'General Surgeon',
        degree: 'MBBS, MS',
        experience: '12 Years',
        about: 'Dr. Bikash Khadka is a General Surgeon at Karnali Provincial Hospital, Surkhet. He pioneered free kidney transplant services at the hospital in coordination with the Shahid Dharmabhakta National Transplant Centre, providing life-saving renal care to patients of the Karnali region.',
        fees: 700,
        address: {
            line1: 'Karnali Provincial Hospital',
            line2: 'Birendranagar, Surkhet'
        },
        hospitals: ['Karnali Provincial Hospital']
    },
    {
        _id: 'doc6',
        name: 'Prof. Dr. Dambar Khadka',
        image: doc6,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '20 Years',
        about: 'Prof. Dr. Dambar Khadka is the Director of Karnali Provincial Hospital, Surkhet. He has been instrumental in modernizing hospital operations including introducing an online OPD appointment system and expanding specialist services for the underserved Karnali province.',
        fees: 900,
        address: {
            line1: 'Karnali Provincial Hospital',
            line2: 'Birendranagar, Surkhet'
        },
        hospitals: ['Karnali Provincial Hospital']
    },
    {
        _id: 'doc7',
        name: 'Dr. Sanjay Kumar Sah',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '14 Years',
        about: 'Dr. Sanjay Kumar Sah is a physician in the Department of Biochemistry at National Medical College & Teaching Hospital, Birgunj. He is also Managing Editor of the Journal of National Medical College, with research interests in thyroid disorders and diabetes.',
        fees: 600,
        address: {
            line1: 'National Medical College & Teaching Hospital',
            line2: 'Birgunj, Parsa, Madhesh Province'
        },
        hospitals: ['National Medical College Teaching Hospital']
    },
    {
        _id: 'doc8',
        name: 'Dr. Md. Shahid Alam',
        image: doc8,
        speciality: 'General Surgeon',
        degree: 'MBBS, FCPS',
        experience: '16 Years',
        about: 'Dr. Md. Shahid Alam is a Consultant Surgeon at National Medical College & Teaching Hospital, Birgunj. He specializes in minimal invasive surgeries, trauma management, breast pathology management, wound treatment, and perianal disease.',
        fees: 750,
        address: {
            line1: 'National Medical College & Teaching Hospital',
            line2: 'Birgunj, Parsa, Madhesh Province'
        },
        hospitals: ['National Medical College Teaching Hospital']
    },
    {
        _id: 'doc9',
        name: 'Dr. Ram Narayan Chaudhary',
        image: doc9,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Ram Narayan Chaudhary is a Specialist in General Medicine at Koshi Hospital, Biratnagar — one of Nepal\'s oldest government hospitals. He provides outpatient and inpatient medical care to thousands of patients from the Koshi Province region.',
        fees: 400,
        address: {
            line1: 'Koshi Hospital',
            line2: 'Rangeli Road, Biratnagar-10, Morang'
        },
        hospitals: ['Koshi Hospital']
    },
    {
        _id: 'doc10',
        name: 'Dr. Yagya Raj Kharel',
        image: doc10,
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, MS',
        experience: '11 Years',
        about: 'Dr. Yagya Raj Kharel is an Orthopedic Specialist at Koshi Hospital, Biratnagar. He performs both minor and major orthopedic surgeries and provides specialized care for bone and joint conditions to patients across the Koshi Province.',
        fees: 500,
        address: {
            line1: 'Koshi Hospital',
            line2: 'Rangeli Road, Biratnagar-10, Morang'
        },
        hospitals: ['Koshi Hospital']
    },
    {
        _id: 'doc11',
        name: 'Dr. Ravi Bastakoti',
        image: doc11,
        speciality: 'General Surgeon',
        degree: 'MBBS, MS',
        experience: '9 Years',
        about: 'Dr. Ravi Bastakoti is a Specialist Surgeon at Koshi Hospital, Biratnagar. He performs a wide range of minor and major surgical procedures and is part of the dedicated surgical team serving patients of Koshi Province and surrounding areas.',
        fees: 500,
        address: {
            line1: 'Koshi Hospital',
            line2: 'Rangeli Road, Biratnagar-10, Morang'
        },
        hospitals: ['Koshi Hospital']
    },
    {
        _id: 'doc12',
        name: 'Dr. Ichha Dhakal',
        image: doc12,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Ichha Dhakal is a Pediatric Cancer and Hematology Specialist at Mahakali Provincial Hospital, Mahendranagar. She launched the first-ever pediatric oncology and hematology service in Sudurpashchim Province, providing critical care for children with blood disorders and cancer.',
        fees: 600,
        address: {
            line1: 'Mahakali Provincial Hospital',
            line2: 'Mahendranagar, Kanchanpur, Sudurpashchim'
        },
        hospitals: ['Mahakali Hospital']
    },
    {
        _id: 'doc13',
        name: 'Dr. Arjun Bhatta',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '15 Years',
        about: 'Dr. Arjun Bhatta serves as the Medical Superintendent of Mahakali Provincial Hospital, Mahendranagar. He oversees clinical operations and specialist services at the main referral hospital of Sudurpashchim Province, serving patients from Kanchanpur, Dadeldhura, Doti, Baitadi, and Bajhang.',
        fees: 700,
        address: {
            line1: 'Mahakali Provincial Hospital',
            line2: 'Mahendranagar, Kanchanpur, Sudurpashchim'
        },
        hospitals: ['Mahakali Hospital']
    },
    {
        _id: 'doc14',
        name: 'Dr. Bishal K.C.',
        image: doc14,
        speciality: 'Cardiologist',
        degree: 'DM',
        experience: '9 Years',
        about: 'Dr. Bishal K.C. is a Consultant Cardiologist at Gautam Buddha Community Heart Hospital (GBCHH), Butwal — the first dedicated heart hospital in western Nepal. He specializes in cardiac diagnosis and treatment using both invasive and non-invasive techniques.',
        fees: 700,
        address: {
            line1: 'Gautam Buddha Community Heart Hospital',
            line2: 'Butwal-10, Ramnagar, Rupandehi'
        },
        hospitals: ['Gautam Buddha Community Heart Hospital']
    },
    {
        _id: 'doc15',
        name: 'Dr. Harish Kumar Shah',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MDS',
        experience: '12 Years',
        about: 'Dr. Harish Kumar Shah is a specialist in Periodontology and Oral Implantology at National Medical College & Teaching Hospital, Birgunj. His research and clinical expertise covers periodontal regeneration, implant dentistry, oral surgery, and management of chronic oral diseases.',
        fees: 500,
        address: {
            line1: 'National Medical College & Teaching Hospital',
            line2: 'Birgunj, Parsa, Madhesh Province'
        },
        hospitals: ['National Medical College Teaching Hospital']
    },
    {
        _id: 'doc16',
        name: 'Prof. Dr. Rabeendra Prasad Shrestha',
        image: doc16,
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, MS (Ortho.)',
        experience: '20 Years',
        about: 'Prof. Dr. Rabeendra Prasad Shrestha is the Principal of Gandaki Medical College Teaching Hospital & Research Centre, Pokhara. An experienced Orthopedic Surgeon affiliated with Tribhuvan University, he leads one of Nepal\'s leading private medical institutions with a vision for excellence in medical education and patient care.',
        fees: 900,
        address: {
            line1: 'Gandaki Medical College Teaching Hospital',
            line2: 'Lekhnath-2, Ritthepani, Kaski, Pokhara'
        },
        hospitals: ['Gandaki Medical College Hospital']
    },
    {
        _id: 'doc17',
        name: 'Dr. Ishwar Sharma Kadel',
        image: doc17,
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, MS',
        experience: '18 Years',
        about: 'Dr. Ishwar Sharma Kadel is a Professor in the Department of Orthopedics at Gandaki Medical College Teaching Hospital & Research Centre, Pokhara. He is also a Section Editor of the Journal of Gandaki Medical College-Nepal (JGMC-N) and contributes actively to orthopedic research and surgical training.',
        fees: 800,
        address: {
            line1: 'Gandaki Medical College Teaching Hospital',
            line2: 'Lekhnath-2, Ritthepani, Kaski, Pokhara'
        },
        hospitals: ['Gandaki Medical College Hospital']
    },
    {
        _id: 'doc18',
        name: 'Dr. Rupa Paneru',
        image: doc18,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '12 Years',
        about: 'Dr. Rupa Paneru is an Assistant Professor in the Department of Obstetrics & Gynaecology at Gandaki Medical College Teaching Hospital & Research Centre, Pokhara. She is actively involved in clinical care, maternal health research, and medical education at GMCTHRC.',
        fees: 700,
        address: {
            line1: 'Gandaki Medical College Teaching Hospital',
            line2: 'Lekhnath-2, Ritthepani, Kaski, Pokhara'
        },
        hospitals: ['Gandaki Medical College Hospital']
    },
    {
        _id: 'doc19',
        name: 'Dr. Nirmal Lamichhane',
        image: doc19,
        speciality: 'Neurologist',
        degree: 'MBBS, MD',
        experience: '15 Years',
        about: 'Dr. Nirmal Lamichhane is the Academic Director and Assistant Professor in the Department of Neuropsychiatry at Gandaki Medical College Teaching Hospital, Pokhara. He is also the General Secretary of the Psychiatrists\' Association of Nepal (PAN) and Executive Editor of the Journal of Psychiatrists\' Association of Nepal.',
        fees: 750,
        address: {
            line1: 'Gandaki Medical College Teaching Hospital',
            line2: 'Lekhnath-2, Ritthepani, Kaski, Pokhara'
        }
    },
    {
        _id: 'doc20',
        name: 'Dr. Bimala Sharma',
        image: doc20,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '16 Years',
        about: 'Dr. Bimala Sharma is a Professor in the Department of Community Medicine at Gandaki Medical College Teaching Hospital & Research Centre, Pokhara. She is a Section Editor of the Journal of Gandaki Medical College-Nepal and contributes to public health research and community medicine education.',
        fees: 650,
        address: {
            line1: 'Gandaki Medical College Teaching Hospital',
            line2: 'Lekhnath-2, Ritthepani, Kaski, Pokhara'
        },
        hospitals: ['Gandaki Medical College Hospital']
    },
]