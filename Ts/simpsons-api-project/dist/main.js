"use strict";
// =======================================================
// INTERFACES Y TIPOS
// =======================================================
// =======================================================
// VARIABLES Y CONSTANTES
// =======================================================
const API_BASE_URL = 'https://thesimpsonsapi.com/api/characters';
const IMAGE_BASE_URL = 'https://cdn.thesimpsonsapi.com/500';
const loadButton = document.getElementById('load-characters-btn');
const loadingSection = document.getElementById('loading-section');
const errorDiv = document.getElementById('error-message-div');
const errorText = errorDiv?.querySelector('.error__text');
const charactersContainer = document.getElementById('characters-container');
// =======================================================
// FUNCIONES REQUERIDAS
// =======================================================
// Muestra el indicador de carga y oculta los mensajes de error.
const showLoading = () => {
    loadingSection?.classList.remove('is-hidden');
    errorDiv?.classList.add('is-hidden');
};
// Oculta el indicador de carga.
const hideLoading = () => {
    loadingSection?.classList.add('is-hidden');
};
// Muestra un mensaje de error y lo oculta automáticamente después de 5 segundos.
const showError = (message) => {
    hideLoading();
    if (errorDiv && errorText) {
        errorText.textContent = message;
        errorDiv.classList.remove('is-hidden');
        // Ocultar automáticamente después de 5 segundos
        setTimeout(() => {
            errorDiv.classList.add('is-hidden');
        }, 5000);
    }
    else {
        console.error("Error: Elementos de error no encontrados en el DOM.");
    }
};
/**
 * Crea y retorna un elemento HTML (tarjeta) para un personaje.
 * @param character El objeto SimpsonCharacter.
 * @returns El elemento HTML creado.
 */
const createCharacterCard = (character) => {
    const imageUrl = `${IMAGE_BASE_URL}${character['portrait_path']}`;
    const phrase = character.phrases[0] || "Sin frase célebre.";
    const card = document.createElement('div');
    card.classList.add('character-card');
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `Retrato de ${character.name}`;
    img.classList.add('character-card__image');
    const name = document.createElement('h3');
    name.textContent = character.name;
    name.classList.add('character-card__name');
    const phraseP = document.createElement('p');
    phraseP.textContent = `"${phrase}"`;
    phraseP.classList.add('character-card__phrase');
    // Ensamblar la tarjeta
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(phraseP);
    return card;
};
// Remueve los caracteres existentes y renderiza los nuevos.
const renderCharacters = (characters) => {
    if (!charactersContainer) {
        console.error("Contenedor de personajes no encontrado.");
        return;
    }
    // Remueve los caracteres existentes
    charactersContainer.innerHTML = '';
    characters.forEach(character => {
        const card = createCharacterCard(character);
        charactersContainer.appendChild(card);
    });
};
// Función asíncrona para obtener los personajes de la API.
const fetchCharacters = async () => {
    try {
        showLoading();
        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText} (${response.status})`);
        }
        // Parsear JSON (usando la interfaz IResponseApi)
        const data = await response.json();
        if (!data.results || !Array.isArray(data.results)) {
            throw new Error("La respuesta de la API no contiene resultados válidos.");
        }
        renderCharacters(data.results);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Ocurrió un error desconocido al cargar los personajes.";
        showError(errorMessage);
        console.error("Error en fetchCharacters:", error);
    }
    finally {
        hideLoading();
    }
};
// =======================================================
// EVENT LISTENERS
// =======================================================
loadButton?.addEventListener('click', () => {
    // Llama a fetchCharacters
    fetchCharacters();
});
