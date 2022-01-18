class PokemonController < ApplicationController
    before_action :set_pokemon, only: [:show, :destroy, :update]
    def index
        poke_list = Pokemon.all
        render json: poke_list, include: [:sprite], methods: [:greeting]
    end

    def hohohohoh
        'Hohohohohohohohoh'
    end
    
    def show
        pokemon = Pokemon.find(params[:id])
        render json: @pokemon, include: [:sprite]
    end

    def create
        pokemon = Pokemon.create(name: params[:name], hp: params[:hp])
        sprite = Sprite.create(front: params[:front], back: params[:back], pokemon: pokemon)
        render json: pokemon, include: [:sprite]
    end

    def update
        @pokemon.update(name: params[:name])

        render json: pokemon, include: [:sprite]
    end

    def destroy
        pokemon.destroy
        render json: pokemon, include: [:sprite]
    end

    private
    def set_pokemon
        @pokemon = Pokemon.find(params[:id])
    end
    
end