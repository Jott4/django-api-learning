from django.urls import include, path
from rest_framework import routers
from django.contrib import admin
from django.views.generic import TemplateView

from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = (
    [
        path("", include(router.urls)),
        path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
        path("api/", include("instagram.urls")),
        path("admin/", admin.site.urls),
        path(
            "swagger-ui/",
            TemplateView.as_view(
                template_name="./templates/swagger-ui.html",
                extra_context={"schema_url": "openapi-schema"},
            ),
            name="swagger-ui",
        ),
    ]
    + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
)
