'use client';

import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const cities = ['Sousse', 'Sfax', 'Hammamet', 'Sidi Bouzid', 'Tunis', 'Monastir', 'Nabeul'];
const roomsOptions = ['S+0', 'S+1', 'S+2', 'S+3', 'S+4', 'S+5'];

const properties = [
  {
    id: 1,
    name: 'Villa Earthe',
    href: '#',
    price: '480,000 DT',
    imageSrc: '/assets/img/home.jpg',
    imageAlt: 'Grande villa moderne avec une cour spacieuse et une piscine.',
    description: 'Une villa luxueuse avec 4 chambres, 3 salles de bains, une grande cour et une piscine. Idéale pour une famille.',
    city: 'Tunis',
    address: 'Rue de Carthage, Tunis',
    typeoperation: 'vente',
    furnished: true,
    rooms: 'S+4'
  },
  {
    id: 2,
    name: 'Appartement Nomad',
    href: '#',
    price: '350,000 DT',
    imageSrc: '/assets/img/slide-1.jpg',
    imageAlt: 'Appartement moderne avec une vue panoramique sur la ville.',
    description: 'Appartement moderne avec 3 chambres, 2 salles de bains, une cuisine équipée et une vue imprenable sur la ville.',
    city: 'Sousse',
    address: 'Avenue Habib Bourguiba, Sousse',
    typeoperation: 'vente',
    furnished: false,
    rooms: 'S+3'
  },
  {
    id: 3,
    name: 'Maison Focus',
    href: '#',
    price: '890,000 DT',
    imageSrc: '/assets/img/house2.jpg',
    imageAlt: 'Maison spacieuse avec un grand jardin et un garage double.',
    description: 'Maison spacieuse avec 5 chambres, 4 salles de bains, un grand jardin et un garage double. Parfait pour une grande famille.',
    city: 'Hammamet',
    address: 'Route Touristique, Hammamet',
    typeoperation: 'vente',
    furnished: true,
    rooms: 'S+5'
  },
  {
    id: 4,
    name: 'Studio Machined',
    href: '#',
    price: '250,000 DT',
    imageSrc: '/assets/img/image2.jpg',
    imageAlt: 'Studio moderne et bien équipé avec balcon.',
    description: 'Studio moderne avec 1 chambre, 1 salle de bain, un balcon et une cuisine ouverte. Idéal pour célibataires ou jeunes couples.',
    city: 'Monastir',
    address: 'Boulevard de la Corniche, Monastir',
    typeoperation: 'location',
    furnished: false,
    rooms: 'S+1'
  },
  {
    id: 5,
    name: 'Penthouse Vue Mer',
    href: '#',
    price: '1,200,000 DT',
    imageSrc: '/assets/img/image3.jpg',
    imageAlt: 'Penthouse luxueux avec une vue panoramique sur la mer.',
    description: 'Penthouse luxueux avec 4 chambres, 4 salles de bains, une grande terrasse avec vue sur la mer. Propriété exclusive.',
    city: 'Tunis',
    address: 'Avenue de la République, La Marsa',
    typeoperation: 'vente',
    furnished: true,
    rooms: 'S+4'
  },
  {
    id: 6,
    name: 'Maison de Charme',
    href: '#',
    price: '650,000 DT',
    imageSrc: '/assets/img/slide-2.jpg',
    imageAlt: 'Maison traditionnelle avec jardin et patio.',
    description: 'Maison de charme avec 3 chambres, 2 salles de bains, un grand jardin et un patio. Mélange parfait de tradition et modernité.',
    city: 'Tunis',
    address: 'Rue Hedi Zarrouk, Sidi Bou Saïd',
    typeoperation: 'vente',
    furnished: false,
    rooms: 'S+3'
  },
  {
    id: 7,
    name: 'Appartement Étoile',
    href: '#',
    price: '275,000 DT',
    imageSrc: '/assets/img/slide-3.jpg',
    imageAlt: 'Appartement lumineux avec une vue dégagée.',
    description: 'Appartement lumineux avec 2 chambres, 1 salle de bain, et un grand balcon. Idéal pour les jeunes familles.',
    city: 'Bizerte',
    address: 'Rue de la République, Bizerte',
    typeoperation: 'location',
    furnished: true,
    rooms: 'S+2'
  },
  {
    id: 8,
    name: 'Maison Moderne',
    href: '#',
    price: '800,000 DT',
    imageSrc: '/assets/img/house14.jpg',
    imageAlt: 'Maison moderne avec un design épuré.',
    description: 'Maison moderne avec 4 chambres, 3 salles de bains, et une terrasse avec vue sur la mer.',
    city: 'Nabeul',
    address: 'Avenue de la Mer, Nabeul',
    typeoperation: 'vente',
    furnished: true,
    rooms: 'S+4'
  },
  {
    id: 9,
    name: 'Loft Central',
    href: '#',
    price: '500,000 DT',
    imageSrc: '/assets/img/house5.jpg',
    imageAlt: 'Loft spacieux au coeur de la ville.',
    description: 'Loft spacieux avec 2 chambres, 1 salle de bain, et un espace ouvert pour les repas et la détente.',
    city: 'Sfax',
    address: 'Place de la Ville, Sfax',
    typeoperation: 'vente',
    furnished: false,
    rooms: 'S+2'
  },
  {
    id: 10,
    name: 'Villa de Luxe',
    href: '#',
    price: '2,000,000 DT',
    imageSrc: '/assets/img/house6.jpg',
    imageAlt: 'Villa de luxe avec des équipements haut de gamme.',
    description: 'Villa de luxe avec 6 chambres, 5 salles de bains, une piscine privée et un grand jardin.',
    city: 'Kairouan',
    address: 'Rue des Jardins, Kairouan',
    typeoperation: 'vente',
    furnished: true,
    rooms: 'S+6'
  },
  {
    id: 11,
    name: 'Appartement Design',
    href: '#',
    price: '400,000 DT',
    imageSrc: '/assets/img/house7.jpg',
    imageAlt: 'Appartement moderne avec des finitions de haute qualité.',
    description: 'Appartement design avec 3 chambres, 2 salles de bains, un grand salon ouvert et une cuisine équipée.',
    city: 'Tunis',
    address: 'Avenue Habib Bourguiba, Tunis',
    typeoperation: 'vente',
    furnished: true,
    rooms: 'S+3'
  },
  {
    id: 12,
    name: 'Maison Traditionnelle',
    href: '#',
    price: '550,000 DT',
    imageSrc: '/assets/img/house8.jpg',
    imageAlt: 'Maison traditionnelle avec un style classique.',
    description: 'Maison traditionnelle avec 4 chambres, 2 salles de bains, un jardin spacieux et une architecture élégante.',
    city: 'Sousse',
    address: 'Rue des Antiquaires, Sousse',
    typeoperation: 'vente',
    furnished: false,
    rooms: 'S+4'
  },
  {
    id: 13,
    name: 'Appartement de Ville',
    href: '#',
    price: '320,000 DT',
    imageSrc: '/assets/img/house9.jpg',
    imageAlt: 'Appartement dans le centre-ville avec toutes les commodités.',
    description: 'Appartement moderne au coeur de la ville avec 2 chambres, 1 salle de bain, et un accès facile aux commerces et aux transports.',
    city: 'Sfax',
    address: 'Boulevard de la Liberté, Sfax',
    typeoperation: 'location',
    furnished: true,
    rooms: 'S+2'
  },
  {
    id: 14,
    name: 'Loft de Luxe',
    href: '#',
    price: '600,000 DT',
    imageSrc: '/assets/img/house10.jpg',
    imageAlt: 'Loft de luxe avec des équipements modernes.',
    description: 'Loft de luxe avec 2 chambres, 2 salles de bains, un espace ouvert avec cuisine équipée et un design moderne.',
    city: 'Monastir',
    address: 'Avenue des Artistes, Monastir',
    typeoperation: 'vente',
    furnished: true,
    rooms: 'S+2'
  },
  {
    id: 15,
    name: 'Maison Contemporaine',
    href: '#',
    price: '900,000 DT',
    imageSrc: '/assets/img/house11.jpg',
    imageAlt: 'Maison contemporaine avec des caractéristiques modernes.',
    description: 'Maison contemporaine avec 5 chambres, 4 salles de bains, une grande terrasse et des équipements modernes.',
    city: 'Hammamet',
    address: 'Route de la Mer, Hammamet',
    typeoperation: 'vente',
    furnished: true,
    rooms: 'S+5'
  },
  {
    id: 16,
    name: 'Appartement Vue Mer',
    href: '#',
    price: '450,000 DT',
    imageSrc: '/assets/img/house13.jpg',
    imageAlt: 'Appartement avec vue sur la mer.',
    description: 'Appartement avec vue imprenable sur la mer, 2 chambres, 1 salle de bain, et un balcon spacieux.',
    city: 'Nabeul',
    address: 'Avenue de la Plage, Nabeul',
    typeoperation: 'vente',
    furnished: false,
    rooms: 'S+2'
  },
  {
    id: 17,
    name: 'Villa de Charme',
    href: '#',
    price: '700,000 DT',
    imageSrc: '/assets/img/house12.jpg',
    imageAlt: 'Villa charmante avec jardin et piscine.',
    description: 'Villa charmante avec 4 chambres, 3 salles de bains, un jardin luxuriant et une piscine.',
    city: 'Kairouan',
    address: 'Rue des Roses, Kairouan',
    typeoperation: 'vente',
    furnished: true,
    rooms: 'S+4'
  },
  {
    id: 18,
    name: 'Studio Élégant',
    href: '#',
    price: '180,000 DT',
    imageSrc: '/assets/img/house16.jpg',
    imageAlt: 'Studio élégant avec des finitions modernes.',
    description: 'Studio élégant avec 1 chambre, 1 salle de bain, et un design intérieur moderne.',
    city: 'Bizerte',
    address: 'Rue de la Liberté, Bizerte',
    typeoperation: 'location',
    furnished: false,
    rooms: 'S+1'
  },
  {
    id: 19,
    name: 'Appartement Penthouse',
    href: '#',
    price: '1,500,000 DT',
    imageSrc: '/assets/img/house15.jpg',
    imageAlt: 'Penthouse exclusif avec une vue panoramique.',
    description: 'Penthouse exclusif avec 4 chambres, 4 salles de bains, une grande terrasse avec vue imprenable.',
    city: 'Tunis',
    address: 'Avenue de l’Indépendance, Tunis',
    typeoperation: 'vente',
    furnished: true,
    rooms: 'S+4'
  },
  {
    id: 20,
    name: 'Maison Familiale',
    href: '#',
    price: '750,000 DT',
    imageSrc: '/assets/img/house14.jpg',
    imageAlt: 'Maison familiale avec un grand espace de vie.',
    description: 'Maison familiale spacieuse avec 4 chambres, 3 salles de bains, et un grand jardin pour les enfants.',
    city: 'Sousse',
    address: 'Rue des Familles, Sousse',
    typeoperation: 'vente',
    furnished: true,
    rooms: 'S+4'
  }
];


export default function Example() {
  const [selectedCity, setSelectedCity] = useState('City');
  const [selectedRooms, setSelectedRooms] = useState('Rooms');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleCityChange = (value) => {
    setSelectedCity(value === '' ? 'City' : value);
  };

  const handleRoomsChange = (value) => {
    setSelectedRooms(value === '' ? 'Rooms' : value);
  };

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const filteredProperties = properties.filter(
    property =>
      (selectedCity === 'City' || property.city === selectedCity) &&
      (selectedRooms === 'Rooms' || property.rooms === selectedRooms)
  );

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center mt-32 gap-4">
        <div className="w-64">
          <Listbox value={selectedCity} onChange={handleCityChange} className="w-full">
            <div className="relative mt-2">
              <ListboxButton className="relative w-full cursor-pointer rounded-md bg-white py-2 px-4 text-left text-gray-900 shadow-md ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm">
                <span className="flex items-center">
                  <span className="block truncate">{selectedCity === 'City' ? 'Sélectionnez une ville' : selectedCity}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </span>
              </ListboxButton>

              <ListboxOptions
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  key=""
                  value=""
                  className="group relative cursor-pointer select-none py-2 px-4 text-gray-900 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <span className="block truncate">Aucune sélection</span>
                  </div>
                </ListboxOption>
                {cities.map((city) => (
                  <ListboxOption
                    key={city}
                    value={city}
                    className="group relative cursor-pointer select-none py-2 px-4 text-gray-900 hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <span className="block truncate">{city}</span>
                    </div>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                      {city === selectedCity && <CheckIcon aria-hidden="true" className="h-5 w-5" />}
                    </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>

        <div className="w-64">
          <Listbox value={selectedRooms} onChange={handleRoomsChange} className="w-full">
            <div className="relative mt-2">
              <ListboxButton className="relative w-full cursor-pointer rounded-md bg-white py-2 px-4 text-left text-gray-900 shadow-md ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm">
                <span className="flex items-center">
                  <span className="block truncate">{selectedRooms === 'Rooms' ? 'Sélectionnez un nombre de chambres' : selectedRooms}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </span>
              </ListboxButton>

              <ListboxOptions
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  key=""
                  value=""
                  className="group relative cursor-pointer select-none py-2 px-4 text-gray-900 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <span className="block truncate">Aucune sélection</span>
                  </div>
                </ListboxOption>
                {roomsOptions.map((rooms) => (
                  <ListboxOption
                    key={rooms}
                    value={rooms}
                    className="group relative cursor-pointer select-none py-2 px-4 text-gray-900 hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <span className="block truncate">{rooms}</span>
                    </div>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                      {rooms === selectedRooms && <CheckIcon aria-hidden="true" className="h-5 w-5" />}
                    </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Properties</h2>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {filteredProperties.map((property) => (
                <a
                  key={property.id}
                  href={property.href}
                  className="group cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handlePropertyClick(property);
                  }}
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-64">
                    <img
                      alt={property.imageAlt}
                      src={property.imageSrc}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{property.name}</h3>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{property.city}</p>
                  <p className="mt-1 text-sm text-gray-500">{property.address}</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">{property.price}</p>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>No results for this city and this room number.</p>
            </div>
          )}
        </div>
      </div>

      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center w-96 p-4">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedProperty(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              alt={selectedProperty.imageAlt}
              src={selectedProperty.imageSrc}
              className="h-64 w-96 w-full object-cover object-center rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{selectedProperty.name}</h3>
              <p className="mt-1 text-lg text-gray-700">{selectedProperty.city}</p>
              <p className="mt-1 text-sm text-gray-500">{selectedProperty.address}</p>
              <p className="mt-1 text-lg font-medium text-gray-900">{selectedProperty.price}</p>
              <p className="mt-2 text-sm text-gray-600">{selectedProperty.description}</p>
              <a href="#" className=" loginbutton object-center ml-14 mt-16">
                {" "}
                <button className="bg-black  bg-opacity-75 text-white hover:bg-red-400 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white border-transparent rounded">
                  Reserve Now
                </button>
              </a>
            </div>
           
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
