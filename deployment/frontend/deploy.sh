kubectl config set-context --current --namespace=bc58

kubectl set image -f ../mock-server/ms.deployment.yaml mockserver-img=${{ secrets.REGISTRY }}/${{ secrets.REGISTRY_USERNAME }}/bc58-data:${{ github.sha }}
kubectl apply -f ../mock-server/ms.deployment.yaml
kubectl apply -f ../mock-server/ms.service.yaml

kubectl set image -f fe.deployment.yaml frontend-img=${{ secrets.REGISTRY }}/${{ secrets.REGISTRY_USERNAME }}/bc58-fe:${{ github.sha }}
kubectl apply -f fe.deployment.yaml
kubectl apply -f fe.service.yaml

kubectl apply -f ingress.yaml

