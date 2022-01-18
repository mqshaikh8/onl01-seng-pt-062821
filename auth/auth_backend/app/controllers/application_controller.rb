class ApplicationController < ActionController::API

    def encode_token(payload)
        JWT.encode(payload, 'fortnite')
    end

    def decode_token
        if request.headers['key']
            token = request.headers['key']

            begin
                JWT.decode(token, 'fortnite', false)
            rescue JWT::DecodeError
                nil
            end
        end
    end
end
