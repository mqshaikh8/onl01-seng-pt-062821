class ApplicationController < ActionController::API

    def encode_token(payload)
        JWT.encode payload, 'fortniterockz'
    end

    def decode_token 
        if request.headers['key']
            token = request.headers['key']
            begin
                JWT.decode(token, 'fortniterockz', false)
            rescue JWT::DecodeError
                nil
            end

        else
            render json: {error: "Does not have key. Key is required"}
        end
    end



end
