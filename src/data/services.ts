import { BookOpen, Users, Shield, ShoppingCart, Sparkles, FileText, Code2, Mic, Globe } from 'lucide-react'

export interface Service {
  id: number
  name: string
  icon: string
  shortDescription: string
  description: string
  highlights?: string[]
}

export interface Achievement {
  id: number
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: 1,
    name: "Traduction & annotation IA (RWS Group)",
    icon: "FileText",
    shortDescription: "Prestataire certifié – corpus, transcription, NLP",
    description: "Préparation de données linguistiques pour modèles d’IA, traduction technique, révision. Partenaire RWS Group.",
    highlights: ["Annotation sémantique", "Transcription audio/vidéo", "Contrôle qualité"]
  },
  {
    id: 2,
    name: "Solutions digitales & e‑commerce",
    icon: "Code2",
    shortDescription: "Sites web, apps, plateformes sur mesure",
    description: "Création de sites vitrines, e‑commerce (ex: Niger Laptops), dashboards, applications mobiles (Flutter, React).",
    highlights: ["React/Next.js", "Flutter", "Paiements intégrés"]
  },
  {
    id: 3,
    name: "Interprétation humanitaire & militaire",
    icon: "Mic",
    shortDescription: "OIM, UNHCR, Barkhane, Takuba",
    description: "Interprète de liaison, consécutive et simultanée pour missions sensibles. Expérience terrain prouvée.",
    highlights: ["Contexte sécurisé", "Langues : songhaï, tamasheq, français, anglais", "Références confidentielles"]
  },
  {
    id: 4,
    name: "Lexicographie & langues rares",
    icon: "BookOpen",
    shortDescription: "Premier dictionnaire tadaksahak",
    description: "Auteur du premier dictionnaire bilingue français–tadaksahak. Travail de terrain et normalisation.",
    highlights: ["Ouvrage de référence", "Plus de 3000 entrées", "Reconnu par les linguistes"]
  },
  {
    id: 5,
    name: "Expertise Inde – solutions linguistiques",
    icon: "Globe",
    shortDescription: "Partenariat avec des spécialistes indiens",
    description: "Collaboration pour des projets multilingues (sanskrit, hindi, ourdou, sous‑titrage, localisation).",
    highlights: ["Sanskrit, hindi, ourdou", "Transcription / translittération", "Correction de corpus"]
  }
]

export const achievements: Achievement[] = [
  { id: 1, title: "Premier dictionnaire tadaksahak", description: "Ouvrage lexicographique de référence.", icon: "BookOpen" },
  { id: 2, title: "Interprète OIM & UNHCR", description: "Missions de protection des réfugiés (Sahel).", icon: "Users" },
  { id: 3, title: "Appui à la Task Force Takuba", description: "Interprétation opérationnelle forces spéciales.", icon: "Shield" },
  { id: 4, title: "Plateforme Niger Laptops", description: "Site e‑commerce complet en production.", icon: "ShoppingCart" },
  { id: 5, title: "Prestataire RWS Group", description: "Annotation IA pour modèles NLP.", icon: "Sparkles" }
]
